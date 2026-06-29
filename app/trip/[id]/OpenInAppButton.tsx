'use client'

import { useEffect } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/app/tripin/id6780014125'

function tryOpenApp(tripId: string) {
  window.location.href = `tripin://trip/${tripId}`
}

export default function OpenInAppButton({ tripId }: { tripId: string }) {
  useEffect(() => {
    tryOpenApp(tripId)
  }, [tripId])

  return (
    <a
      href={APP_STORE_URL}
      className="w-full flex items-center justify-center gap-3 text-white font-sans font-medium text-base py-4 rounded-brand hover:opacity-90 transition-opacity"
      style={{ background: '#E84040' }}
    >
      Download Tripin on the App Store
    </a>
  )
}
