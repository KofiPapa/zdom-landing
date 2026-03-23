import { motion } from 'framer-motion'
import { MdRocketLaunch, MdPeople, MdPublic, MdSecurity } from 'react-icons/md'
import Container from '../components/ui/Container'
import CTA from '../components/sections/CTA'

const values = [
  { icon: MdRocketLaunch, title: 'Innovation First', description: 'We push the boundaries of what digital signage can do with cutting-edge cloud technology.' },
  { icon: MdPeople, title: 'Customer Obsessed', description: 'Every feature we build starts with a real customer need. Your success is our success.' },
  { icon: MdPublic, title: 'Global Scale', description: 'Built for businesses everywhere — from single-location shops to multinational enterprises.' },
  { icon: MdSecurity, title: 'Enterprise Security', description: 'Bank-grade encryption, SOC 2 compliance, and 99.9% uptime SLA across all plans.' },
]

const stats = [
  { number: '2,000+', label: 'Businesses' },
  { number: '10,000+', label: 'Active Screens' },
  { number: '50+', label: 'Countries' },
  { number: '24/7', label: 'Support' },
]

export default function AboutPage() {
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
              About ZDOM
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Making Digital Signage <span className="text-gradient-warm">Simple for Everyone</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ZDOM was founded with a simple mission: give every business the power to communicate visually with their audience, without the complexity or cost of traditional signage solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Digital signage used to be expensive, complicated, and reserved for big corporations with IT teams. We believed it didn't have to be that way. In 2024, we set out to build a platform that anyone could use — from a coffee shop owner to a hospital network administrator.
              </p>
              <p>
                Today, ZDOM powers thousands of screens across 50+ countries. Our cloud-first platform lets you design, schedule, and manage content from any browser, with changes appearing on screens in seconds. Whether you have one screen or ten thousand, ZDOM scales with you.
              </p>
              <p>
                We're a team of engineers, designers, and signage industry veterans who are passionate about helping businesses communicate better. We're just getting started.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <value.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
