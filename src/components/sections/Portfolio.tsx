import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const PROJECTS = [
  {
    image: '/images/portfolio/ramonas-kitchen.png',
    name: "Ramona's Kitchen",
    type: 'Restaurant',
    desc: 'Full menu board system with landscape multi-screen setup',
    screens: 4,
  },
  {
    image: '/images/portfolio/burgerim.png',
    name: 'Burgerim',
    type: 'Fast Food Chain',
    desc: 'Portrait & landscape mixed display with combo promotions',
    screens: 4,
  },
  {
    image: '/images/portfolio/bubble-tea-shop.png',
    name: 'Bubble Tea Bar',
    type: 'Beverage Shop',
    desc: 'Colorful multi-screen menu with drink categories and pricing',
    screens: 5,
  },
  {
    image: '/images/portfolio/pizza-combos.png',
    name: 'Pizza & Poutine',
    type: 'Pizzeria',
    desc: 'Dynamic combo displays with student pricing zones',
    screens: 4,
  },
  {
    image: '/images/portfolio/red-menu-board.png',
    name: 'Soul Food Kitchen',
    type: 'Restaurant',
    desc: 'Bold red-themed menu boards across multiple portrait screens',
    screens: 4,
  },
  {
    image: '/images/portfolio/ice-cream-shop.png',
    name: 'Rolly Polly Ice Cream',
    type: 'Dessert Shop',
    desc: 'Portrait displays with detailed flavor descriptions',
    screens: 3,
  },
  {
    image: '/images/portfolio/paint-store.png',
    name: 'Burlington Paint',
    type: 'Retail Store',
    desc: 'Brand showcase display with product highlights',
    screens: 1,
  },
  {
    image: '/images/portfolio/falafel-restaurant.png',
    name: 'Mediterranean Grill',
    type: 'Restaurant',
    desc: 'Dual-screen menu with sides, drinks and featured wraps',
    screens: 2,
  },
  {
    image: '/images/portfolio/red-diner.png',
    name: 'Classic Diner',
    type: 'Restaurant',
    desc: 'Vibrant red menu boards with breakfast and entree sections',
    screens: 4,
  },
]

export default function Portfolio() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-24 bg-slate-900 overflow-hidden">
      <Container>
        <SectionHeading
          label="Our Work"
          title="Powering Real Businesses"
          subtitle="See how restaurants, retail stores, and food chains use ZDOM to create stunning digital menu boards and signage displays."
          dark
        />

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {[
            { value: '50+', label: 'Businesses Served' },
            { value: '200+', label: 'Screens Deployed' },
            { value: '9', label: 'Industries' },
            { value: '99.9%', label: 'Uptime' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-slate-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 hover:border-orange-500/40 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-opacity duration-500 ${
                  activeIdx === i ? 'opacity-90' : 'opacity-60'
                }`} />

                {/* Screen count badge */}
                <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.screens} {project.screens === 1 ? 'Screen' : 'Screens'}
                </div>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1">
                  {project.type}
                </span>
                <h3 className="text-white text-lg font-bold mb-1">{project.name}</h3>
                <p className={`text-slate-300 text-sm leading-relaxed transition-all duration-500 ${
                  activeIdx === i ? 'opacity-100 max-h-20 translate-y-0' : 'opacity-0 max-h-0 translate-y-2'
                }`}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-6">
            Want results like these for your business?
          </p>
          <a
            href="https://zdashboard.vercel.app/register"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Free Trial
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}
