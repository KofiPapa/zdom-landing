import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MdDragIndicator,
  MdDevices,
  MdSchedule,
  MdCloudOff,
  MdScreenRotation,
  MdWidgets,
  MdBolt,
  MdVerified,
  MdGroups,
} from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { features } from '../../data/features'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  MdDragIndicator,
  MdDevices,
  MdSchedule,
  MdCloudOff,
  MdScreenRotation,
  MdWidgets,
  MdBolt,
  MdVerified,
  MdGroups,
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = iconMap[feature.icon]
  const row = Math.floor(index / 3)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: row * 0.15 + (index % 3) * 0.05 }}
      className="glass glass-hover rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group cursor-default"
    >
      <motion.div
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-xl flex items-center justify-center mb-4 text-primary-light group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
      >
        {Icon && <Icon size={24} />}
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/8 to-transparent rounded-full blur-3xl" />

      <Container className="relative">
        <SectionHeading
          label="Features"
          title="Everything You Need for Digital Signage"
          subtitle="Powerful tools to create, manage, and scale your digital signage network with ease."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
