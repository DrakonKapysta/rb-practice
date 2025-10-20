import { createBrowserClient } from '@/pkg/integrations/supabase'
import { SupabaseClient, User } from '@supabase/supabase-js'
import { useEffect, useRef, useState } from 'react'

export const useAuth = () => {
  const supabaseRef = useRef<SupabaseClient>(createBrowserClient())

  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabaseRef.current.auth.getSession()

      setUser(session?.user ?? null)

      setIsLoading(false)
    }
    getUser()

    const {
      data: { subscription },
    } = supabaseRef.current.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)

      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { user, isLoading, userId: user?.id, isAuthenticated: !!user }
}
