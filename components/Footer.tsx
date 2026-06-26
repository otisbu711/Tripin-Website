export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t" style={{ backgroundColor: '#1A0C0A', borderColor: '#2a1a18' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-xl text-white">tripin</span>
          <img src="/pin.png" alt="" aria-hidden="true" className="w-3 h-4 object-contain" />
        </div>
        <div className="flex items-center gap-6 font-sans text-sm" style={{ color: '#9B5850' }}>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="mailto:otisbu711@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="font-sans text-xs" style={{ color: '#9B5850' }}>
          © 2026 Tripin
        </p>
      </div>
    </footer>
  )
}
