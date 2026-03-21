import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string
  title: string
  subtitle?: string
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {label && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
