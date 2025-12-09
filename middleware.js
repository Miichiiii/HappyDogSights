import { NextResponse } from 'next/server';

const locales = ['de', 'en'];
const defaultLocale = 'de';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Перевірте, чи це кореневий шлях
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // Перевірте, чи шлях вже має locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Перенаправте на URL з locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|favicon.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
};