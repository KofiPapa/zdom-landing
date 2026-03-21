import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdPower, MdBrush, MdRocketLaunch } from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    icon: MdPower,
    title: 'Plug In Your Device',
    description: 'Connect any compatible device to your screen. Amazon Fire Stick, Raspberry Pi, or smart TV -- we support them all.',
    step: '01',
  },
  {
    icon: MdBrush,
    title: 'Create Your Content',
    description: 'Use our drag-and-drop editor to design beautiful content, or choose from hundreds of templates.',
    step: '02',
  },
  {
    icon: MdRocketLaunch,
    title: 'Go Live',
    description: 'Publish your content and watch it appear on your screens instantly. Manage everything from your dashboard.',
    step: '03',
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
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white mb-6 shadow-lg shadow-primary/25">
                <step.icon size={32} />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
