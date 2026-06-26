export default function DownloadSection() {
  return (
    <section
      id="download"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: '#1A0C0A' }}
    >
      {/* Glows */}
      <div
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(181,50,42,0.18) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(181,50,42,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(181,50,42,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        <h2 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.92] tracking-tight text-white mb-8">
          start your<br />journey.
        </h2>

        <p className="font-sans text-lg leading-relaxed mb-12 max-w-md" style={{ color: '#9B5850' }}>
          Download Tripin and discover the world through people who've been there.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-3 bg-white font-sans font-medium text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity mb-4"
          style={{ color: '#1A0C0A' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>

        <p className="font-sans text-sm" style={{ color: '#4a2a24' }}>
          Android coming soon.
        </p>

        {/* Decorative dots grid */}
        <div className="absolute bottom-12 right-12 grid grid-cols-5 gap-2 opacity-10 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white" />
          ))}
        </div>
        <div className="absolute top-16 left-12 grid grid-cols-5 gap-2 opacity-10 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white" />
          ))}
        </div>

      </div>
    </section>
  )
}
