import { precompute } from 'flags/next'
import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from '@/pkg/libraries/locale/routing'

import { charactersFlags } from './pkg/integrations/growthbook'
import { updateSession } from './pkg/integrations/supabase'

const featurePages = ['/features']

export async function proxy(req: NextRequest) {
  const i18nRes = createMiddleware(routing)(req)

  const headerLocale = i18nRes.headers.get('x-middleware-request-x-next-intl-locale')

  const [_, predefinedLocale, ...segments] = req.nextUrl.pathname.split('/')

  const isLocaleProvided = headerLocale == predefinedLocale

  const rewritePathname = isLocaleProvided ? req.nextUrl.pathname : `${headerLocale}${req.nextUrl.pathname}`
  const pathWithoutLocale = '/' + segments.join('/')

  if (featurePages.includes(pathWithoutLocale) || featurePages.includes(req.nextUrl.pathname)) {
    const code = await precompute(charactersFlags)

    const nextUrl = new URL(`${rewritePathname}/${code}`, req.url)

    const rewriteResponse = await updateSession(req, i18nRes)

    return NextResponse.rewrite(nextUrl, rewriteResponse)
  }

  return await updateSession(req, i18nRes)
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_next/static|_next/image|_vercel|static|.well-known|admin|fonts|sitemap|images|icons|robots|webmanifest|.*\\.xml$|.*\\.webp$|.*\\.avif$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.svg$|.*\\.txt$|.*\\.js$|.*\\.css$).*)',
  ],
}
