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

export default function middleware(request) {
  const pathname = new URL(request.url).pathname;

  const isShareRoute = pathname === '/share' || pathname.startsWith('/share/');
  const isPublicAsset =
    pathname === '/styles.css' ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/assets/');

  if (isShareRoute || isPublicAsset) {
    return next({
      headers: {
        'X-Vault-Auth': isShareRoute ? 'share-bypass' : 'asset-bypass',
      },
    });
  }

  const expectedUser = process.env.VAULT_AUTH_USER;
  const expectedPassword = process.env.VAULT_AUTH_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    return next({
      headers: {
        'X-Vault-Auth': 'not-configured',
      },
    });
  }

  const credentials = parseBasicAuth(request.headers.get('authorization'));

  if (
    credentials &&
    credentials.user === expectedUser &&
    credentials.password === expectedPassword
  ) {
    return next({
      headers: {
        'X-Vault-Auth': 'ok',
      },
    });
  }

  return unauthorized();
}
