import { motion } from 'framer-motion'
import { MdCheck, MdStorefront, MdLocalHospital, MdHotel, MdSchool, MdBusiness } from 'react-icons/md'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import CTA from '../components/sections/CTA'

const solutions = [
  {
    id: 'retail',
    icon: MdStorefront,
    title: 'Retail & Restaurants',
    subtitle: 'Drive sales with dynamic displays',
    description: 'Promote daily specials, showcase new arrivals, and create engaging in-store experiences that drive purchases. Digital menu boards, window displays, and wayfinding — all managed from one dashboard.',
    benefits: ['Digital menu boards & pricing', 'Promotional displays & offers', 'Window signage automation', 'Queue management displays', 'Multi-location content sync'],
    color: 'from-orange-500 to-red-500',
    image: '/images/portfolio/ramonas-kitchen.png',
    imageLabel: "Ramona's Kitchen — Restaurant Menu Wall",
  },
  {
    id: 'fastfood',
    icon: MdLocalHospital,
    title: 'Fast Food & QSR',
    subtitle: 'Boost orders with combo boards',
    description: 'Numbered combo displays, student deals, and limited-time offers that catch attention and increase average order value. Update pricing across all locations in seconds.',
    benefits: ['Numbered combo displays', 'Student & time-based pricing', 'Multi-screen menu layouts', 'Drive-thru menu boards', 'Centralized pricing updates'],
    color: 'from-blue-500 to-cyan-500',
    image: '/images/portfolio/pizza-combos.png',
    imageLabel: 'Pizza & Poutine — Combo Display System',
  },
  {
    id: 'cafes',
    icon: MdHotel,
    title: 'Cafes & Dessert Shops',
    subtitle: 'Showcase every flavor beautifully',
    description: 'From bubble tea to ice cream rolls, display your full menu with mouth-watering visuals. Portrait screens for tight spaces, detailed descriptions, and seasonal rotations on auto-pilot.',
    benefits: ['Portrait menu boards for small spaces', 'Detailed flavor descriptions & photos', 'Seasonal menu auto-rotation', 'Step-by-step ordering instructions', 'Vivid colors that attract foot traffic'],
    color: 'from-purple-500 to-pink-500',
    image: '/images/portfolio/ice-cream-shop.png',
    imageLabel: 'Rolly Polly — Ice Cream Menu Boards',
  },
  {
    id: 'retail-store',
    icon: MdSchool,
    title: 'Retail Stores',
    subtitle: 'In-store brand experiences',
    description: 'Highlight brands, showcase product demos, and promote seasonal campaigns with digital displays that customers actually notice. From paint stores to boutiques, any retail space transforms.',
    benefits: ['Brand partner showcases', 'Product demo & how-to videos', 'Seasonal campaign rotation', 'Window display automation', 'Works on any TV or monitor'],
    color: 'from-green-500 to-emerald-500',
    image: '/images/portfolio/paint-store.png',
    imageLabel: 'Burlington Paint — Brand Showcase Display',
  },
  {
    id: 'multi-location',
    icon: MdBusiness,
    title: 'Multi-Location Chains',
    subtitle: 'One dashboard, every screen',
    description: 'Whether you have 2 locations or 200, manage content across your entire network from a single dashboard. Push updates simultaneously, maintain brand consistency, and monitor every screen remotely.',
    benefits: ['Push content to all locations at once', 'Group screens by store or region', 'Per-location menu customization', 'Remote monitoring & health checks', 'Franchise-ready management tools'],
    color: 'from-indigo-500 to-blue-500',
    image: '/images/portfolio/burgerim.png',
    imageLabel: 'Burgerim — Multi-Location Chain Displays',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20" style={{ background: 'linear-gradient(135deg, #ECF7FF 0%, #FFFFFF 40%, #FFF3EC 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Digital Signage for <span className="text-gradient-warm">Every Industry</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whatever your industry, ZDOM adapts to your needs. Explore how businesses like yours use digital signage to communicate better.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-24">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.id}
                id={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
                style={i % 2 === 1 ? { direction: 'rtl' } : {}}
              >
                <div style={{ direction: 'ltr' }}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${sol.color} rounded-xl flex items-center justify-center mb-5 text-white shadow-lg`}>
                    <sol.icon size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{sol.title}</h2>
                  <p className="text-primary font-medium mb-4">{sol.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sol.description}</p>
                  <ul className="space-y-3 mb-8">
                    {sol.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MdCheck className="text-green-600" size={14} />
                        </div>
                        <span className="text-gray-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" href="https://zdashboard.vercel.app/register">
                    Get Started Free
                  </Button>
                </div>

                {/* Real image */}
                <div style={{ direction: 'ltr' }} className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 group">
                  <img
                    src={sol.image}
                    alt={sol.imageLabel}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      {sol.imageLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
