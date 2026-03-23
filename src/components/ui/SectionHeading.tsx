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
        <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary-light font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
          {label}
        </span>
      )}
      <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-5" />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
