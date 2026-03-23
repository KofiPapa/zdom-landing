import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({
  label,
  title,
  subtitle,
  dark = false,
}: {
  label?: string
  title: string
  subtitle?: string
  dark?: boolean
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
        <span className={`inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 ${
          dark ? 'bg-white/10 text-orange-300' : 'bg-orange-50 text-primary border border-orange-100'
        }`}>
          <span className="w-2 h-2 rounded-full bg-primary" />
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
        dark ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
