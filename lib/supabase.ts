import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (!_client) {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_ANON_KEY
    if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY')
    _client = createClient(url, key)
  }
  return _client
}

export type TripPreview = {
  id: string
  title: string | null
  city: string | null
  country: string
  cover_image_url: string | null
  trip_rating: number | null
  start_date: string | null
  end_date: string | null
  profile: {
    username: string
    display_name: string | null
    avatar_url: string | null
  } | null
}

export async function getTripPreview(id: string): Promise<TripPreview | null> {
  const { data, error } = await getClient()
    .from('trips')
    .select('id, title, city, country, cover_image_url, trip_rating, start_date, end_date, profile:profiles(username, display_name, avatar_url)')
    .eq('id', id)
    .single()

  if (error || !data) return null

  // Supabase returns joined relations as arrays; normalise to a single object
  const raw = data as typeof data & { profile: unknown }
  const profileRaw = raw.profile
  const profile = Array.isArray(profileRaw) ? (profileRaw[0] ?? null) : profileRaw

  return { ...data, profile } as TripPreview
}
