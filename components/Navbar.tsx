export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Frosted glass background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/40" />

      {/* Logo */}
      <a href="#hero" className="relative flex items-center gap-2">
        <span className="font-display text-4xl leading-none tracking-tight text-foreground">
          tripin
        </span>
        <img
          src="/pin.png"
          alt=""
          aria-hidden="true"
          className="w-5 h-7 object-contain mt-0.5"
        />
      </a>

      {/* Nav links */}
      <div className="relative flex items-center gap-8">
        <a href="#about" className="font-sans text-sm text-muted hover:text-foreground transition-colors">
          About
        </a>
        <a href="#download" className="font-sans text-sm text-muted hover:text-foreground transition-colors">
          Download
        </a>
        <a href="#privacy" className="font-sans text-sm text-muted hover:text-foreground transition-colors">
          Privacy
        </a>
        <a
          href="#download"
          className="font-sans text-sm font-medium bg-coral text-white px-5 py-2.5 rounded-full hover:bg-coral-hover transition-colors"
        >
          Get the app
        </a>
      </div>
    </nav>
  )
}
