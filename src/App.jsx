import { useState, useEffect } from 'react'

const HERO_IMG = "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_island_sunrise_1772323107.jpg"
const GALLERY = [
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_final1_1772322578.jpg", caption: "Ingleside Bay at sunset" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_final2_1772322578.jpg", caption: "The property" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_bay_sunset_1772323107.jpg", caption: "Ingleside Bay at sunset" },
]

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Included', href: '#included' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Trophy Catches', href: '#trophies' },
  { label: 'Book Now', href: '#book' },
]

const SPECIES = [
  { name: 'Redfish', emoji: '🐟', desc: "The bay's crown jewel. Bull reds and slot fish both run strong in Ingleside Bay year-round." },
  { name: 'Speckled Trout', emoji: '🎣', desc: 'Spec city. Grass flats and deeper channels load up with trout, especially in the cooler months.' },
  { name: 'Flounder', emoji: '🐠', desc: 'Flat and stealthy. Flounder stack up near structure and along the bulkhead — great for gigging at night.' },
  { name: 'Black Drum', emoji: '🥁', desc: 'Hard fighters. Drum love the bay bottom and are a blast on light tackle from the dock.' },
  { name: 'Sheepshead', emoji: '🐡', desc: 'The bait thieves of the bay. Stack up around the pilings and dock structure all year long.' },
  { name: 'Shark', emoji: '🦈', desc: 'Drone-drop specialty. Fly bait 300+ yards offshore and hook into bull sharks and blacktips.' },
]

const TROPHIES = [
  { fish: 'Redfish', size: '32"', weight: '12 lbs', emoji: '🏆' },
  { fish: 'Speckled Trout', size: '28"', weight: '7 lbs', emoji: '⭐' },
  { fish: 'Flounder', size: '22"', weight: '5 lbs', emoji: '🥇' },
  { fish: 'Black Drum', size: '38"', weight: '22 lbs', emoji: '💪' },
  { fish: 'Bull Shark', size: "6'4\"", weight: '180 lbs', emoji: '🦈' },
]

const INCLUDED = [
  { icon: '🎣', title: 'All Tackle Provided', desc: 'Rods, reels, lures, hooks, weights — everything you need is already here.' },
  { icon: '🦀', title: 'Live & Cut Bait', desc: 'Fresh bait available on-site. Mullet, shrimp, and crab when in season.' },
  { icon: '🚣', title: 'Kayak Launch', desc: 'Use our kayaks to explore the flats, reach structure, or fish the grass beds.' },
  { icon: '🏝️', title: 'Private Island Dock', desc: 'Walk the dock out to our private island — a prime casting spot most anglers never see.' },
  { icon: '🔪', title: 'Fish Cleaning Station', desc: "Full cleaning table on-site. You catch 'em, we help clean 'em." },
  { icon: '🚁', title: 'Drone Bait Drops', desc: 'Our fishing drone drops bait 300+ yards offshore — the secret weapon for big sharks.' },
]


const CATCHES = [
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch1_1772323035.jpg", species: "Speckled Trout", caption: "Kayak fishing at sunrise on the bay" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch2_1772323035.jpg", species: "Flounder", caption: "Big flounder right off the dock at sunset" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch3_1772323035.jpg", species: "Redfish", caption: "Slot red from the bulkhead" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch4_1772323035.jpg", species: "Redfish", caption: "Night fishing haul — 3 bull reds" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch5_1772323035.jpg", species: "Flounder", caption: "Flounder on the cleaning table, island dock in background" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch6_1772323035.jpg", species: "Redfish", caption: "Night redfish from the property" },
  { url: "https://hbfjdfxephlczkfgpceg.supabase.co/storage/v1/object/public/temp/redfish_catch7_1772323035.jpg", species: "Redfish", caption: "Evening red at dusk on Ingleside Bay" },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{background:'#0a1628'}}>

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300`} style={{background: scrolled ? '#0a1628ee' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none'}}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold" style={{color:'#5fb3a1', fontFamily:'Georgia,serif'}}>
            🎣 Redfish Rendezvous
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm transition-colors hover:text-white" style={{color:'#c8a97e'}}>
                {l.label}
              </a>
            ))}
            <a href="#book" className="px-4 py-2 rounded-full text-sm font-bold text-white transition-all hover:scale-105" style={{background:'#5fb3a1'}}>
              Book Now
            </a>
          </div>
          <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{background:'#0a1628'}}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="py-1 border-b border-gray-700" onClick={() => setMenuOpen(false)} style={{color:'#c8a97e'}}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end justify-center" style={{
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.15) 40%, rgba(10,22,40,0.8) 80%, rgba(10,22,40,1) 100%)'}}></div>
        <div className="relative z-10 text-center px-4 pb-24 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{fontFamily:'Georgia,serif', color:'white', textShadow:'0 2px 30px rgba(0,0,0,0.7)'}}>
            Redfish<br /><span style={{color:'#5fb3a1'}}>Rendezvous</span>
          </h1>
          <p className="text-xl md:text-2xl mb-3" style={{color:'#e2c99e', fontFamily:'Georgia,serif', textShadow:'0 1px 10px rgba(0,0,0,0.8)'}}>
            Private Waterfront Fishing · Ingleside Bay, Texas
          </p>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto" style={{color:'#cbd5e1', textShadow:'0 1px 8px rgba(0,0,0,0.9)'}}>
            Your own private bay access — bulkhead, island dock, kayaks, and fishing drone. Redfish, trout, flounder, shark. All tackle included. Guided or self-guided.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="px-8 py-4 rounded-full text-lg font-bold text-white transition-all hover:scale-105" style={{background:'#5fb3a1', boxShadow:'0 4px 20px rgba(95,179,161,0.5)'}}>
              Book Your Trip
            </a>
            <a href="#experience" className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105" style={{border:'2px solid #c8a97e', color:'#c8a97e', backdropFilter:'blur(4px)'}}>
              See the Setup ↓
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-4" style={{background:'#0a1628'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{fontFamily:'Georgia,serif', color:'white'}}>The Property</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group" style={{aspectRatio:'4/3'}}>
                <img src={g.url} alt={g.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:'linear-gradient(to top, rgba(10,22,40,0.9), transparent)'}}>
                  <p className="p-3 text-xs font-medium" style={{color:'#c8a97e'}}>{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-4" style={{background:'#0d1e35'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily:'Georgia,serif', color:'white'}}>The Setup</h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{color:'#94a3b8'}}>
            This isn't a crowded public pier. It's a private waterfront property on Ingleside Bay — with spots most anglers never get access to.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon:'🏗️', title:'The Bulkhead', desc:'Solid casting platform right on the water. Perfect for redfish and drum cruising the shallows along the seawall.' },
              { icon:'🏝️', title:'Private Island', desc:"A dock leads to a private island out in the bay — an elevated vantage point with open water casting in every direction." },
              { icon:'🚁', title:'Drone Fishing', desc:'Our fishing drone drops bait 300-400 yards offshore where the big sharks run. Nothing else gets bait out there.' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-8 text-center" style={{background:'#0a1628', border:'1px solid #1e3a5f'}}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{color:'#5fb3a1', fontFamily:'Georgia,serif'}}>{item.title}</h3>
                <p style={{color:'#94a3b8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="py-20 px-4" style={{background:'#0a1628'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily:'Georgia,serif', color:'white'}}>Everything's Included</h2>
          <p className="text-center mb-16 max-w-xl mx-auto" style={{color:'#94a3b8'}}>Show up ready to fish. We handle the rest.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED.map(item => (
              <div key={item.title} className="flex gap-4 rounded-xl p-6" style={{background:'#112040', border:'1px solid #1e3a5f'}}>
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{color:'#c8a97e'}}>{item.title}</h3>
                  <p className="text-sm" style={{color:'#94a3b8'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4" style={{background:'#0d1e35'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily:'Georgia,serif', color:'white'}}>Simple Pricing</h2>
          <p className="text-center mb-16" style={{color:'#94a3b8'}}>By the hour. No hidden fees. Bring your crew.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{background:'#0a1628', border:'2px solid #1e3a5f'}}>
              <div className="text-4xl mb-4">🎣</div>
              <h3 className="text-2xl font-bold mb-2" style={{fontFamily:'Georgia,serif', color:'white'}}>Self-Guided</h3>
              <p className="mb-6" style={{color:'#94a3b8'}}>Full access to the property. You run the show.</p>
              <div className="text-5xl font-bold mb-1" style={{color:'#5fb3a1'}}>$25<span className="text-xl font-normal">/hr</span></div>
              <p className="text-sm mb-8" style={{color:'#94a3b8'}}>per person · minimum 2 hours</p>
              <ul className="space-y-3 mb-8">
                {['Bulkhead access','Private island dock','Kayak launch','All tackle included','Fish cleaning station'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{color:'#c8a97e'}}>
                    <span style={{color:'#5fb3a1'}}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#book" className="block text-center py-3 rounded-full font-bold transition-all hover:scale-105" style={{border:'2px solid #5fb3a1', color:'#5fb3a1'}}>
                Book Self-Guided
              </a>
            </div>
            <div className="rounded-2xl p-8 relative" style={{background:'linear-gradient(135deg,#0f3d5c,#0d2a4a)', border:'2px solid #5fb3a1'}}>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{background:'#5fb3a1', color:'#0a1628'}}>MOST POPULAR</div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2" style={{fontFamily:'Georgia,serif', color:'white'}}>Guided Experience</h3>
              <p className="mb-6" style={{color:'#94a3b8'}}>Our on-site guide handles bait, lines, and puts you on fish.</p>
              <div className="text-5xl font-bold mb-1" style={{color:'#c8a97e'}}>$40<span className="text-xl font-normal">/hr</span></div>
              <p className="text-sm mb-8" style={{color:'#94a3b8'}}>per person · minimum 2 hours</p>
              <ul className="space-y-3 mb-8">
                {['Everything in Self-Guided','Live bait catching & cutting','Rod/reel setup & rigging','Spot advice & fish finding','Drone bait drops included','Cleaning assistance'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{color:'#c8a97e'}}>
                    <span style={{color:'#c8a97e'}}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#book" className="block text-center py-3 rounded-full font-bold transition-all hover:scale-105" style={{background:'#5fb3a1', color:'#0a1628'}}>
                Book Guided Trip
              </a>
            </div>
          </div>
          <p className="text-center mt-8 text-sm" style={{color:'#64748b'}}>Group rates available for 4+ people. Contact us to discuss.</p>
        </div>
      </section>

      {/* SPECIES */}
      <section className="py-20 px-4" style={{background:'#0a1628'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily:'Georgia,serif', color:'white'}}>What's Biting</h2>
          <p className="text-center mb-16 max-w-xl mx-auto" style={{color:'#94a3b8'}}>
            Ingleside Bay is one of the most productive fisheries on the Texas Coast.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIES.map(s => (
              <div key={s.name} className="rounded-xl p-6" style={{background:'#112040', border:'1px solid #1e3a5f'}}>
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="text-lg font-bold mb-2" style={{color:'#5fb3a1'}}>{s.name}</h3>
                <p className="text-sm" style={{color:'#94a3b8'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TROPHY CATCHES */}
      <section id="trophies" className="py-20 px-4" style={{background:'#0d1e35'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2" style={{fontFamily:'Georgia,serif', color:'white'}}>Trophy Catches</h2>
          <p className="text-center mb-4" style={{color:'#5fb3a1', fontFamily:'Georgia,serif', fontStyle:'italic'}}>From the dock, the island & the drone</p>
          <p className="text-center mb-16 max-w-xl mx-auto text-sm" style={{color:'#94a3b8'}}>Real catches from this property. The bay doesn't lie.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TROPHIES.map(t => (
              <div key={t.fish} className="rounded-2xl p-6 text-center transition-transform hover:-translate-y-1" style={{background:'#0a1628', border:'1px solid #1e3a5f'}}>
                <div className="text-4xl mb-3">{t.emoji}</div>
                <div className="text-3xl font-bold mb-1" style={{color:'#c8a97e'}}>{t.size}</div>
                <div className="text-sm font-bold mb-1" style={{color:'white'}}>{t.fish}</div>
                <div className="text-xs" style={{color:'#5fb3a1'}}>{t.weight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CATCHES */}
      <section id="catches" className="py-20 px-4" style={{background:'#0a1628'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2" style={{fontFamily:'Georgia,serif', color:'white'}}>Real Catches.</h2>
          <p className="text-center mb-4" style={{color:'#5fb3a1', fontFamily:'Georgia,serif', fontStyle:'italic'}}>From this exact property.</p>
          <p className="text-center mb-16 max-w-xl mx-auto text-sm" style={{color:'#94a3b8'}}>
            No stock photos. No guided charter boat. These were all caught from the bulkhead, the island dock, and the kayaks — right here at Redfish Rendezvous.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CATCHES.map((c, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group" style={{aspectRatio:'3/4'}}>
                <img src={c.url} alt={c.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:'linear-gradient(to top, rgba(10,22,40,0.95), transparent)'}}>
                  <div className="p-3">
                    <p className="text-xs font-bold mb-1" style={{color:'#5fb3a1'}}>{c.species}</p>
                    <p className="text-xs" style={{color:'#94a3b8'}}>{c.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <a href="#book" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105" style={{background:'#5fb3a1', boxShadow:'0 4px 20px rgba(95,179,161,0.4)'}}>
              🎣 Book Your Trip
            </a>
          </p>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-20 px-4" style={{background:'#0a1628'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{fontFamily:'Georgia,serif', color:'white'}}>Book Your Trip</h2>
          <p className="mb-12" style={{color:'#94a3b8'}}>Pick your date and time. We'll confirm within a few hours and get you set up.</p>
          <div className="rounded-2xl p-12 mb-8" style={{background:'#112040', border:'1px solid #1e3a5f'}}>
            <div className="text-5xl mb-4">📅</div>
            <p className="font-bold mb-2" style={{color:'#5fb3a1'}}>Booking Calendar Coming Soon</p>
            <p className="text-sm mb-6" style={{color:'#64748b'}}>In the meantime, reach out directly and we'll get you scheduled fast.</p>
            <a
              href="https://wa.me/13615550000?text=Hey%2C%20I'd%20like%20to%20book%20a%20fishing%20trip%20at%20Redfish%20Rendezvous!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{background:'#25d366', boxShadow:'0 4px 20px rgba(37,211,102,0.3)'}}
            >
              <span className="text-xl">💬</span> Text/WhatsApp to Book
            </a>
          </div>
          <p className="text-sm" style={{color:'#475569'}}>Ingleside, Texas · Bay access only — we'll send directions after booking</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 text-center" style={{background:'#060e1a', borderTop:'1px solid #1e3a5f'}}>
        <p className="text-2xl font-bold mb-2" style={{fontFamily:'Georgia,serif', color:'#5fb3a1'}}>🎣 Redfish Rendezvous</p>
        <p className="text-sm mb-6" style={{color:'#475569'}}>Ingleside Bay, Texas · Private Waterfront Fishing</p>
        <a href="https://wa.me/13615550000" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
          style={{background:'#25d366'}}>
          💬 Contact on WhatsApp
        </a>
        <p className="mt-8 text-xs" style={{color:'#1e3a5f'}}>© 2025 Redfish Rendezvous · All rights reserved</p>
      </footer>
    </div>
  )
}
