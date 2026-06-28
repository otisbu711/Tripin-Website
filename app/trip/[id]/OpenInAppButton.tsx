'use client'

import { useEffect } from 'react'

const FALLBACK_URL = 'https://tripintravelapp.com/#download'
const TIMEOUT_MS = 1500

function tryOpenApp(tripId: string) {
  window.location.href = `tripin://trip/${tripId}`

  const timer = setTimeout(() => {
    window.location.href = FALLBACK_URL
  }, TIMEOUT_MS)

  // If the browser loses focus the app opened — cancel the fallback redirect
  const cancel = () => { if (document.hidden) clearTimeout(timer) }
  document.addEventListener('visibilitychange', cancel, { once: true })
  window.addEventListener('pagehide', () => clearTimeout(timer), { once: true })
}

export default function OpenInAppButton({ tripId }: { tripId: string }) {
  // Auto-attempt on page load
  useEffect(() => {
    tryOpenApp(tripId)
  }, [tripId])

  return (
    <button
      onClick={() => tryOpenApp(tripId)}
      className="w-full flex items-center justify-center gap-3 text-white font-sans font-medium text-base py-4 rounded-brand hover:opacity-90 transition-opacity"
      style={{ background: '#E84040' }}
    >
      Open in Tripin
    </button>
  )
}
