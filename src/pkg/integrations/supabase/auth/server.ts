'use server'

import { cookies } from 'next/headers'

import { createServerClient } from '@supabase/ssr'

import { envClient } from '@/config/env'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(envClient.NEXT_PUBLIC_SUPABASE_URL!, envClient.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
      },
    },
  })
}
