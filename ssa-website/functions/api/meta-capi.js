const PRODUCTION_ORIGIN = "https://sinergi-selaras-academy.pages.dev";
const PAGES_HOST_SUFFIX = ".sinergi-selaras-academy.pages.dev";
const PIXEL_ID = "1007602018357130";
const GRAPH_API_VERSION = "v27.0";

function isAllowedOrigin(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      (url.origin === PRODUCTION_ORIGIN || url.hostname.endsWith(PAGES_HOST_SUFFIX));
  } catch { return false; }
}

function json(data, status = 200, origin = PRODUCTION_ORIGIN) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": origin,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "Content-Type"
    }
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  const origin = request.headers.get("Origin") || "";
  if (!isAllowedOrigin(origin)) return json({ error: "Origin tidak diizinkan" }, 403);
  const requestOrigin = new URL(origin).origin;
  const isProduction = requestOrigin === PRODUCTION_ORIGIN;
  if (request.method === "OPTIONS") return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": requestOrigin,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "Content-Type",
      "access-control-max-age": "86400"
    }
  });
  if (request.method !== "POST") return json({ error: "Method tidak diizinkan" }, 405);
  if (!env.META_CAPI_ACCESS_TOKEN) return json({ error: "CAPI belum dikonfigurasi" }, 503, requestOrigin);
  // Preview hanya boleh mengirim event uji. Ini mencegah traffic preview masuk ke data produksi.
  if (!isProduction && !env.META_CAPI_TEST_EVENT_CODE) {
    return json({ error: "Preview memerlukan META_CAPI_TEST_EVENT_CODE" }, 503, requestOrigin);
  }

  const length = Number(request.headers.get("Content-Length") || 0);
  if (length > 4096) return json({ error: "Payload terlalu besar" }, 413, requestOrigin);

  let body;
  try { body = await request.json(); } catch { return json({ error: "JSON tidak valid" }, 400, requestOrigin); }

  const allowedEvents = new Set(["Contact", "Lead"]);
  if (!allowedEvents.has(body.event_name)) return json({ error: "Event tidak diizinkan" }, 400, requestOrigin);
  if (typeof body.event_id !== "string" || !/^[A-Za-z0-9._:-]{1,100}$/.test(body.event_id)) {
    return json({ error: "Event ID tidak valid" }, 400, requestOrigin);
  }

  let sourceUrl;
  try {
    sourceUrl = new URL(body.event_source_url);
    if (sourceUrl.origin !== requestOrigin || !isAllowedOrigin(sourceUrl.origin)) throw new Error("origin");
  } catch {
    return json({ error: "URL sumber tidak valid" }, 400, requestOrigin);
  }

  const userData = {};
  if (typeof body.fbp === "string" && body.fbp.length <= 200 && /^fb\.1\./.test(body.fbp)) userData.fbp = body.fbp;
  if (typeof body.fbc === "string" && body.fbc.length <= 500 && /^fb\.1\./.test(body.fbc)) userData.fbc = body.fbc;

  if (!userData.fbp && !userData.fbc) {
    return json({ error: "Cookie Meta belum tersedia untuk pencocokan event" }, 400, requestOrigin);
  }

  const event = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.event_id,
    action_source: "website",
    event_source_url: sourceUrl.href,
    user_data: userData
  };

  const payload = { data: [event] };
  if (env.META_CAPI_TEST_EVENT_CODE) payload.test_event_code = env.META_CAPI_TEST_EVENT_CODE;

  let metaResponse;
  try {
    metaResponse = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(env.META_CAPI_ACCESS_TOKEN)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      }
    );
  } catch {
    return json({ error: "Tidak dapat menghubungi Meta" }, 502, requestOrigin);
  }

  const result = await metaResponse.json().catch(() => ({}));
  if (!metaResponse.ok || result.error) {
    return json({ error: "Meta menolak event", meta_code: result.error?.code || null }, 502, requestOrigin);
  }
  return json({ accepted: true, events_received: result.events_received || 0, fbtrace_id: result.fbtrace_id || null }, 200, requestOrigin);
}