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
  },
  {
    id: 'healthcare',
    icon: MdLocalHospital,
    title: 'Healthcare',
    subtitle: 'Improve patient experience',
    description: 'Keep patients informed with wait times, wayfinding, health tips, and appointment information. Reduce perceived wait times and improve communication across your facility.',
    benefits: ['Waiting room information', 'Wayfinding & directories', 'Health education content', 'Emergency alerts & notifications', 'HIPAA-compliant infrastructure'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'hospitality',
    icon: MdHotel,
    title: 'Hospitality',
    subtitle: 'Elevate your guest experience',
    description: 'Welcome guests with personalized displays, showcase amenities, promote events, and provide real-time information throughout your property.',
    benefits: ['Lobby welcome displays', 'Event & conference signage', 'Restaurant menu boards', 'Concierge information screens', 'Pool & amenity schedules'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'education',
    icon: MdSchool,
    title: 'Education',
    subtitle: 'Connect your campus',
    description: 'Engage students and staff with campus news, event schedules, emergency alerts, and wayfinding. Keep your entire campus informed and connected.',
    benefits: ['Campus announcements', 'Event calendars & schedules', 'Emergency notification system', 'Cafeteria menu displays', 'Department directories'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'corporate',
    icon: MdBusiness,
    title: 'Corporate',
    subtitle: 'Empower internal communications',
    description: 'Keep employees informed and engaged with KPI dashboards, company news, meeting room displays, and visitor management across all your offices.',
    benefits: ['KPI & analytics dashboards', 'Meeting room signage', 'Company news & updates', 'Visitor welcome screens', 'Multi-office synchronization'],
    color: 'from-indigo-500 to-blue-500',
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
          <div className="space-y-20">
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
                <div style={{ direction: 'ltr' }} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl aspect-[4/3] flex items-center justify-center border border-gray-100">
                  <sol.icon size={80} className="text-gray-200" />
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
