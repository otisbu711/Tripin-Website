import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL ?? ''
const key = process.env.SUPABASE_ANON_KEY ?? ''

export const supabase = createClient(url || 'https://placeholder.supabase.co', key || 'placeholder')

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
  const { data, error } = await supabase
    .from('trips')
    .select('id, title, city, country, cover_image_url, trip_rating, start_date, end_date, profile:profiles(username, display_name, avatar_url)')
    .eq('id', id)
    .single()

  if (error || !data) return null
  return data as TripPreview
}
