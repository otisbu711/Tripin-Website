const features = [
  { number: '01', title: 'Discover', description: 'Find restaurants, bars, hotels, beaches, and hidden gems — rated and reviewed by real travellers who have actually been there.' },
  { number: '02', title: 'Rate & Review', description: 'Score every place from 1 to 10. Add vibes, captions, and photos. Build an honest travel diary you can look back on.' },
  { number: '03', title: 'Build Trips', description: 'Group your moments into trips. See your journey on a map. Share it with friends or keep it for yourself.' },
]

const places = [
  {
    name: 'Shibuya Crossing',
    location: 'Tokyo, Japan',
    rating: 9.4,
    tag: 'landmark',
    img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=300&fit=crop&q=80',
  },
  {
    name: 'Cristo Redentor',
    location: 'Rio de Janeiro',
    rating: 9.1,
    tag: 'bucket-list',
    img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop&q=80',
  },
  {
    name: 'Marina Bay Sands',
    location: 'Singapore',
    rating: 9.3,
    tag: 'rooftop bar',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&q=80',
  },
  {
    name: 'Jemaa el-Fna',
    location: 'Marrakech',
    rating: 8.8,
    tag: 'hidden gem',
    img: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400&h=300&fit=crop&q=80',
  },
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

          {/* Right — destination photo grid */}
          <div className="hidden lg:block shrink-0 w-72">
            <div className="grid grid-cols-2 gap-3">
              {places.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl overflow-hidden relative group shadow-[0_4px_24px_rgba(26,12,10,0.10)] hover:shadow-[0_8px_32px_rgba(26,12,10,0.18)] transition-shadow"
                  style={{ height: 140 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                  {/* Rating badge */}
                  <div
                    className="absolute top-2 right-2 font-sans text-xs font-semibold px-2 py-0.5 rounded-full flex items-baseline gap-0.5"
                    style={{ background: 'rgba(181,50,42,0.92)', color: '#fff' }}
                  >
                    {p.rating}<span style={{ fontSize: 9, opacity: 0.8 }}>/10</span>
                  </div>
                  {/* Place label */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <p className="font-sans font-semibold text-xs text-white leading-tight">{p.name}</p>
                    <p className="font-sans text-[10px] text-white/60">{p.location} · {p.tag}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Community blurb */}
            <div className="mt-3 bg-white rounded-2xl p-4 shadow-[0_4px_24px_rgba(26,12,10,0.06)]">
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
