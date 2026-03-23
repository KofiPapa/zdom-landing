import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdPower, MdBrush, MdRocketLaunch } from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    icon: MdPower,
    title: 'Plug In Your Device',
    description: 'Connect any compatible device to your screen — Amazon Fire Stick, Raspberry Pi, Android TV, or smart TV.',
    step: '01',
    color: 'from-secondary to-secondary-light',
  },
  {
    icon: MdBrush,
    title: 'Create Your Content',
    description: 'Use our drag-and-drop editor or choose from 100+ templates. Add images, videos, widgets, and more.',
    step: '02',
    color: 'from-primary to-primary-light',
  },
  {
    icon: MdRocketLaunch,
    title: 'Go Live Instantly',
    description: 'Publish content and see it appear on your screens in seconds. Manage everything from your dashboard.',
    step: '03',
    color: 'from-green-500 to-emerald-400',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          label="How It Works"
          title="Up and Running in 3 Simple Steps"
          subtitle="Get your digital signage network started in minutes, not days."
        />
        <div ref={ref} className="relative grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-secondary via-primary to-green-500 origin-left"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.25 }}
              className="relative text-center"
            >
              <div className={`relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl text-white mb-6 shadow-lg`}>
                <step.icon size={36} />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
