'use client'

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/40" />

        {/* Logo */}
        <a href="/" className="relative flex items-center gap-2">
          <span className="font-display text-3xl sm:text-4xl leading-none tracking-tight text-foreground">
            tripin
          </span>
          <img src="/pin.png" alt="" aria-hidden="true" className="w-4 h-6 sm:w-5 sm:h-7 object-contain mt-0.5" />
        </a>

        {/* Desktop nav */}
        <div className="relative hidden md:flex items-center gap-8">
          <a href="/#about" className="font-sans text-sm text-muted hover:text-foreground transition-colors">About</a>
          <a href="/#download" className="font-sans text-sm text-muted hover:text-foreground transition-colors">Download</a>
          <a href="/privacy" className="font-sans text-sm text-muted hover:text-foreground transition-colors">Privacy</a>
          <a href="/contact" className="font-sans text-sm text-muted hover:text-foreground transition-colors">Contact</a>
          <a href="/#download" className="font-sans text-sm font-medium bg-coral text-white px-5 py-2.5 rounded-full hover:bg-coral-hover transition-colors">
            Get the app
          </a>
        </div>

        {/* Mobile: hamburger only */}
        <button
          onClick={() => setOpen(!open)}
          className="relative flex md:hidden flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col pt-28 px-8 pb-12 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(255,248,246,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <div className="flex flex-col gap-2 flex-1">
          {[['/#about', 'About'], ['/#download', 'Download'], ['/privacy', 'Privacy'], ['/contact', 'Contact']].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl text-foreground hover:text-coral transition-colors py-3 border-b border-border/30"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="/#download"
          onClick={() => setOpen(false)}
          className="mt-8 flex items-center justify-center gap-3 bg-foreground text-background font-sans font-medium text-base px-8 py-4 rounded-full"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>
      </div>
    </>
  )
}
