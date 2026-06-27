export const dynamic = 'force-dynamic'

import { getTripPreview } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const trip = await getTripPreview(id)
  if (!trip) return { title: 'Trip not found — Tripin' }
  const destination = [trip.city, trip.country].filter(Boolean).join(', ')
  return {
    title: `${trip.title ?? destination} — Tripin`,
    description: `See ${trip.profile?.display_name ?? trip.profile?.username ?? 'this traveller'}'s trip to ${destination} on Tripin.`,
  }
}

export default async function TripPage({ params }: Props) {
  const { id } = await params
  const trip = await getTripPreview(id)

  if (!trip) notFound()

  const destination = [trip.city, trip.country].filter(Boolean).join(', ')
  const owner = trip.profile?.display_name ?? trip.profile?.username ?? 'A Tripin user'

  function formatDate(d: string | null) {
    if (!d) return null
    const [year, month] = d.split('-')
    return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-GB', {
      month: 'short',
      year: 'numeric',
    })
  }

  const dateRange =
    trip.start_date || trip.end_date
      ? [formatDate(trip.start_date), formatDate(trip.end_date)].filter(Boolean).join(' – ')
      : null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
      {/* Background blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 20%, #FAE8E7 0%, #FFF8F6 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center gap-6">
        {/* Cover image — blurred/teased */}
        <div className="relative w-full aspect-[4/3] rounded-brand overflow-hidden bg-surface">
          {trip.cover_image_url ? (
            <>
              <Image
                src={trip.cover_image_url}
                alt={destination}
                fill
                className="object-cover blur-sm scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-5xl">
              🗺️
            </div>
          )}

          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-xl shadow">
              🔒
            </div>
            <span className="font-sans text-xs text-white font-medium drop-shadow">
              Download Tripin to view
            </span>
          </div>
        </div>

        {/* Trip info */}
        <div className="flex flex-col gap-1">
          <h1 className="font-sans font-semibold text-2xl text-foreground">
            {trip.title ?? destination}
          </h1>
          <p className="font-sans text-muted text-sm">{destination}</p>
          {dateRange && (
            <p className="font-sans text-muted text-xs">{dateRange}</p>
          )}
        </div>

        {/* Owner */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-surface overflow-hidden flex items-center justify-center text-sm">
            {trip.profile?.avatar_url ? (
              <Image
                src={trip.profile.avatar_url}
                alt={owner}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            ) : (
              '👤'
            )}
          </div>
          <span className="font-sans text-sm text-muted">
            by <span className="text-foreground font-medium">{owner}</span>
          </span>
        </div>

        {trip.trip_rating && (
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans text-sm font-medium"
            style={{ background: '#FAE8E7', color: '#B5322A' }}
          >
            <span>★</span>
            <span>{trip.trip_rating.toFixed(1)}</span>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col gap-3 w-full mt-2">
          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 bg-coral text-white font-sans font-medium text-base py-4 rounded-brand hover:bg-coral-hover transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Tripin to view this trip
          </a>
          <a
            href="/"
            className="font-sans text-sm text-muted hover:text-coral transition-colors"
          >
            Learn about Tripin →
          </a>
        </div>
      </div>
    </main>
  )
}
