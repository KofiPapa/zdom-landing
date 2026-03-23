import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MdDragIndicator, MdDevices, MdSchedule, MdCloudOff,
  MdScreenRotation, MdWidgets, MdBolt, MdVerified, MdGroups,
} from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { features } from '../../data/features'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  MdDragIndicator, MdDevices, MdSchedule, MdCloudOff,
  MdScreenRotation, MdWidgets, MdBolt, MdVerified, MdGroups,
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
      className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group cursor-default"
    >
      <motion.div
        whileHover={{ rotate: 6, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm"
      >
        {Icon && <Icon size={26} />}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-surface">
      <Container>
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
