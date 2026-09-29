interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'X-XSS-Protection': '0',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Content-Security-Policy': [
    "default-src 'self'",
    "img-src 'self' data: https://imagedelivery.net",
    "style-src 'self' 'unsafe-inline'",
    "script-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ].join('; '),
};

function withHeaders(response: Response, extra: Record<string, string> = {}): Response {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries({ ...SECURITY_HEADERS, ...extra })) {
    headers.set(k, v);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === 'www.phxsugaring.com') {
      url.hostname = 'phxsugaring.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    const isAsset = /\.[a-zA-Z0-9]+$/.test(url.pathname);
    if (!isAsset && url.pathname !== '/' && !url.pathname.endsWith('/')) {
      url.pathname = `${url.pathname}/`;
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';

    const cacheExtra: Record<string, string> = {};
    if (url.pathname === '/robots.txt' || url.pathname.includes('sitemap')) {
      cacheExtra['Cache-Control'] = 'public, max-age=3600';
    } else if (contentType.includes('text/html')) {
      cacheExtra['Cache-Control'] = 'public, max-age=300, must-revalidate';
      cacheExtra['Link'] = `<https://phxsugaring.com${url.pathname}>; rel="canonical"`;
    } else if (
      url.pathname.startsWith('/_astro/') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.svg')
    ) {
      cacheExtra['Cache-Control'] = 'public, max-age=31536000, immutable';
    }

    return withHeaders(response, cacheExtra);
  },
};
