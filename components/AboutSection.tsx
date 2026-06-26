const features = [
  { number: '01', title: 'Discover', description: 'Find restaurants, bars, hotels, beaches, and hidden gems — rated and reviewed by real travellers who have actually been there.' },
  { number: '02', title: 'Rate & Review', description: 'Score every place from 1 to 10. Add vibes, captions, and photos. Build an honest travel diary you can look back on.' },
  { number: '03', title: 'Build Trips', description: 'Group your moments into trips. See your journey on a map. Share it with friends or keep it for yourself.' },
]

const categories = [
  { emoji: '🍜', label: 'Restaurant', rating: 9.1 },
  { emoji: '🏖️', label: 'Beach', rating: 8.7 },
  { emoji: '🍸', label: 'Bar', rating: 7.9 },
  { emoji: '🏨', label: 'Hotel', rating: 8.3 },
  { emoji: '🎭', label: 'Activity', rating: 9.4 },
  { emoji: '🌿', label: 'Hidden Gem', rating: 9.8 },
]

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 py-32" style={{ background: '#FFF8F6' }}>
      <div className="max-w-6xl mx-auto w-full">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div className="flex-1">
            <p className="font-sans text-sm font-medium text-coral uppercase tracking-widest mb-6">
              About Tripin
            </p>

            <p className="font-sans text-muted text-xl leading-relaxed mb-16 max-w-xl">
              Tripin turns real travel experiences into your next adventure. Share your favourite spots, post honest reviews, discover restaurants, beaches, nightlife, activities and hidden gems, and let the Tripin community guide you to places you will actually want to experience.
            </p>

            <div className="flex flex-col divide-y divide-border">
              {features.map((f) => (
                <div key={f.number} className="flex flex-col md:flex-row md:items-start gap-4 py-8 group">
                  <span className="font-sans text-xs text-muted w-10 pt-1 shrink-0">{f.number}</span>
                  <h3 className="font-display text-3xl text-foreground w-40 shrink-0 group-hover:text-coral transition-colors leading-tight">
                    {f.title}
                  </h3>
                  <p className="font-sans text-muted text-base leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — category visual grid */}
          <div className="hidden lg:block shrink-0 w-72">
            <div className="grid grid-cols-2 gap-3">
              {categories.map((c) => (
                <div
                  key={c.label}
                  className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-[0_4px_24px_rgba(26,12,10,0.06)] hover:shadow-[0_8px_32px_rgba(26,12,10,0.12)] transition-shadow"
                >
                  <span className="text-2xl">{c.emoji}</span>
                  <div>
                    <p className="font-sans font-medium text-sm text-foreground mb-2">{c.label}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: '#F7EAE8' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${(c.rating / 10) * 100}%`, background: '#B5322A' }}
                        />
                      </div>
                      <span className="font-sans text-xs font-semibold" style={{ color: '#B5322A' }}>{c.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Community blurb */}
            <div className="mt-4 bg-white rounded-2xl p-4 shadow-[0_4px_24px_rgba(26,12,10,0.06)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {['#B5322A', '#4A90C4', '#5CB584', '#C49660'].map((color, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold" style={{ background: color }}>
                      {['O', 'S', 'M', 'J'][i]}
                    </div>
                  ))}
                </div>
                <p className="font-sans text-xs text-muted">+2.4k travellers</p>
              </div>
              <p className="font-sans text-xs text-muted leading-relaxed">Sharing real experiences, not sponsored ones.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
