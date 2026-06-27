export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-5 sm:px-8 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FAE8E7 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EDD5D1 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-24 sm:pt-28 pb-12 lg:pb-16">

        {/* Left — text */}
        <div className="flex-1 flex flex-col items-start w-full">
          <div className="inline-flex items-center gap-2 bg-coral-bg border border-coral/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
            <span className="text-xs font-sans font-medium text-coral tracking-wide uppercase">
              Now available on iOS
            </span>
          </div>

          <h1 className="font-display text-[clamp(40px,6.5vw,96px)] leading-[0.95] tracking-tight text-foreground mb-5 sm:mb-8">
            trust your network,<br />not the internet.
          </h1>

          <p className="font-sans text-base sm:text-xl text-muted max-w-md leading-relaxed mb-7 sm:mb-10">
            Discover hidden gems, rate every moment, and share your journeys with the people you trust.
          </p>

          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-foreground text-background font-sans font-medium text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>

        {/* Mobile — single card visible below text */}
        <div className="lg:hidden w-full max-w-sm">
          <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.14)] w-full" style={{ background: '#161620' }}>
            {/* Profile header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px' }}>
              <div style={{ width: 34, height: 34, borderRadius: 17, overflow: 'hidden', flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=68&h=68&fit=crop&q=80"
                  alt="laura"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: 'sans-serif', margin: 0 }}>laura.m</p>
                <p style={{ color: '#555', fontSize: 11, fontFamily: 'sans-serif', margin: '1px 0 0' }}>Amalfi Coast · 2 days ago</p>
              </div>
            </div>
            {/* Photo */}
            <div style={{ height: 200, position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop&q=80"
                alt="Positano"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px' }}>
                <p style={{ color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: 'sans-serif', margin: 0 }}>Positano Viewpoint</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontFamily: 'sans-serif', margin: '4px 0 0' }}>Amalfi Coast · landmark</p>
              </div>
            </div>
            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px' }}>
              <p style={{ color: '#888', fontSize: 12, fontFamily: 'sans-serif', margin: 0, fontStyle: 'italic' }}>"absolutely breathtaking."</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, background: 'rgba(232,97,74,0.12)', borderRadius: 8, padding: '4px 10px' }}>
                <span style={{ color: '#E8614A', fontSize: 14, fontWeight: 700, fontFamily: 'sans-serif' }}>9.6</span>
                <span style={{ color: '#E8614A', fontSize: 10, fontFamily: 'sans-serif', opacity: 0.7 }}>/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop — floating visual cards */}
        <div className="hidden lg:block relative shrink-0 w-[380px] h-[420px]">

          {/* Card 1 — bar interior */}
          <div
            className="float absolute top-0 right-4 w-64 rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.22)]"
            style={{ '--rotate': '2deg' } as React.CSSProperties}
          >
            <div style={{ height: 200, position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=520&h=400&fit=crop&q=80"
                alt="El Xampanyet bar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', top: 10, right: 10, background: '#161620', border: '1px solid #2a2a3a', borderRadius: 8, padding: '4px 9px', display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ color: '#E8614A', fontSize: 13, fontWeight: 700, fontFamily: 'sans-serif' }}>9.2</span>
                <span style={{ color: '#555', fontSize: 9, fontFamily: 'sans-serif' }}>/10</span>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
                <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: 'sans-serif', margin: 0 }}>El Xampanyet</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, fontFamily: 'sans-serif', margin: '3px 0 0' }}>Barcelona · bar</p>
              </div>
            </div>
          </div>

          {/* Card 2 — coastal landmark */}
          <div
            className="float-delay absolute top-[230px] left-0 w-60 rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.20)]"
            style={{ '--rotate': '-1.5deg' } as React.CSSProperties}
          >
            <div style={{ height: 180, position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=480&h=360&fit=crop&q=80"
                alt="Positano"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', top: 10, right: 10, background: '#161620', border: '1px solid #2a2a3a', borderRadius: 8, padding: '4px 9px', display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ color: '#E8614A', fontSize: 13, fontWeight: 700, fontFamily: 'sans-serif' }}>9.6</span>
                <span style={{ color: '#555', fontSize: 9, fontFamily: 'sans-serif' }}>/10</span>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
                <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: 'sans-serif', margin: 0 }}>Positano Viewpoint</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, fontFamily: 'sans-serif', margin: '3px 0 0' }}>Amalfi Coast · landmark</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
