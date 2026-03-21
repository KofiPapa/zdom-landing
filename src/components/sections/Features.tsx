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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
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
