import { next } from '@vercel/functions';

function unauthorized() {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Abar Vault", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  });
}

function parseBasicAuth(header) {
  if (!header || !header.startsWith('Basic ')) return null;
  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(':');
    if (separator === -1) return null;
    return {
      user: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

function isAuthenticated(request) {
  const expectedUser = process.env.VAULT_AUTH_USER;
  const expectedPassword = process.env.VAULT_AUTH_PASSWORD;
  if (!expectedUser || !expectedPassword) return false;

  const credentials = parseBasicAuth(request.headers.get('authorization'));
  return (
    credentials &&
    credentials.user === expectedUser &&
    credentials.password === expectedPassword
  );
}

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  /* --- API: share token (only for authenticated users) --- */
  if (pathname === '/api/share-token') {
    if (!isAuthenticated(request)) return unauthorized();
    const token = process.env.VAULT_SHARE_SECRET || '';
    return new Response(JSON.stringify({ token }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'private, no-store',
      },
    });
  }

  /* --- Public routes: /share/ pages, assets --- */
  const isShareRoute = pathname === '/share' || pathname.startsWith('/share/');
  const isPublicAsset =
    pathname === '/styles.css' ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_vercel/');

  if (isShareRoute || isPublicAsset) {
    return next({
      headers: {
        'X-Vault-Auth': isShareRoute ? 'share-bypass' : 'asset-bypass',
      },
    });
  }

  /* --- Share token: ?share=SECRET bypasses auth on any page --- */
  const shareSecret = process.env.VAULT_SHARE_SECRET;
  if (shareSecret && url.searchParams.get('share') === shareSecret) {
    return next({
      headers: { 'X-Vault-Auth': 'share-token' },
    });
  }

  /* --- Normal Basic Auth --- */
  if (isAuthenticated(request)) {
    return next({
      headers: { 'X-Vault-Auth': 'ok' },
    });
  }

  const expectedUser = process.env.VAULT_AUTH_USER;
  const expectedPassword = process.env.VAULT_AUTH_PASSWORD;
  if (!expectedUser || !expectedPassword) {
    return next({
      headers: { 'X-Vault-Auth': 'not-configured' },
    });
  }

  return unauthorized();
}
