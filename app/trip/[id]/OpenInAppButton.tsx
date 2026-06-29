'use client'

import { useEffect } from 'react'

function tryOpenApp(tripId: string) {
  window.location.href = `tripin://trip/${tripId}`
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
