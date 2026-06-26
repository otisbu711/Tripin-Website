export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FAE8E7 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EDD5D1 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 pt-24 pb-16">

        {/* Left — text */}
        <div className="flex-1 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 bg-coral-bg border border-coral/20 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
            <span className="text-xs font-sans font-medium text-coral tracking-wide uppercase">
              Now available on iOS
            </span>
          </div>

          <h1 className="font-display text-[clamp(56px,6.5vw,96px)] leading-[0.95] tracking-tight text-foreground mb-8">
            trust your network,<br />not the internet.
          </h1>

          <p className="font-sans text-xl text-muted max-w-md leading-relaxed mb-10">
            Discover hidden gems, rate every moment, and share your journeys with the people you trust.
          </p>

          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-foreground text-background font-sans font-medium text-base px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>

        {/* Right — floating UI cards */}
        <div className="hidden lg:block relative shrink-0 w-[380px] h-[480px]">

          {/* Card 1: Place rating */}
          <div
            className="float absolute top-0 right-6 w-64 bg-white rounded-2xl p-4 shadow-[0_8px_40px_rgba(26,12,10,0.10)]"
            style={{ '--rotate': '2deg' } as React.CSSProperties}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#FAE8E7' }}>🏖️</div>
              <div>
                <p className="font-sans font-semibold text-sm text-foreground">Amalfi Coast</p>
                <p className="font-sans text-xs text-muted">Italy · Beach</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: '#FAE8E7', color: '#B5322A' }}>★ 9.2</span>
              <span className="font-sans text-xs text-muted">unmissable ✦</span>
            </div>
          </div>

          {/* Card 2: Review snippet */}
          <div
            className="float-delay absolute top-[150px] left-0 w-72 bg-white rounded-2xl p-4 shadow-[0_8px_40px_rgba(26,12,10,0.10)]"
            style={{ '--rotate': '-1.5deg' } as React.CSSProperties}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white" style={{ background: '#B5322A' }}>S</div>
              <div>
                <p className="font-sans font-medium text-sm text-foreground">@sofia_travels</p>
                <p className="font-sans text-xs text-muted">2 days ago</p>
              </div>
            </div>
            <p className="font-sans text-sm text-foreground mb-3 leading-relaxed">"Hidden gem — worth every single step."</p>
            <div className="flex gap-1.5 flex-wrap">
              <span className="font-sans text-xs px-2 py-0.5 rounded-full" style={{ background: '#F7EAE8', color: '#9B5850' }}>peaceful</span>
              <span className="font-sans text-xs px-2 py-0.5 rounded-full" style={{ background: '#F7EAE8', color: '#9B5850' }}>hidden gem</span>
              <span className="font-sans text-xs px-2 py-0.5 rounded-full" style={{ background: '#F7EAE8', color: '#9B5850' }}>scenic</span>
            </div>
          </div>

          {/* Card 3: Trip summary */}
          <div
            className="float-delay-2 absolute top-[310px] right-2 w-64 bg-white rounded-2xl p-4 shadow-[0_8px_40px_rgba(26,12,10,0.10)]"
            style={{ '--rotate': '1.5deg' } as React.CSSProperties}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans font-semibold text-sm text-foreground">Tokyo Summer '25</p>
              <span className="text-base">🗺️</span>
            </div>
            <p className="font-sans text-xs text-muted mb-3">12 moments · 5 places</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#F7EAE8' }}>
                <div className="h-full rounded-full" style={{ width: '87%', background: '#B5322A' }} />
              </div>
              <span className="font-sans text-xs font-semibold" style={{ color: '#B5322A' }}>8.7</span>
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
