import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match root
    '/',
    // Match all localized paths — must be a static literal, Next.js analyzes this at build time
    '/(en|es)/:path*',
    // Match all paths except internals and static files
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
