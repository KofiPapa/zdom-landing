import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Container from '../ui/Container'
import Button from '../ui/Button'

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress >= 1) clearInterval(timer)
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 10000, suffix: '+', label: 'Screens' },
  { value: 2000, suffix: '+', label: 'Businesses' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 50, suffix: '+', label: 'Countries' },
]

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              #1 Cloud Digital Signage Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Turn Any Screen Into a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Powerful Digital Sign
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Create, schedule, and manage stunning digital signage content from anywhere.
            No design skills needed. Works on any screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="lg" href="/signup">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              See How It Works
            </Button>
          </motion.div>

          {/* Animated mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl shadow-gray-900/20">
              <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="w-full h-2 bg-white/40 rounded mb-2" />
                      <div className="w-3/4 h-2 bg-white/30 rounded mb-4" />
                      <div className="w-full h-16 bg-white/20 rounded" />
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="w-full h-20 bg-white/20 rounded mb-2" />
                      <div className="w-full h-2 bg-white/40 rounded mb-2" />
                      <div className="w-2/3 h-2 bg-white/30 rounded" />
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-4 col-span-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/30 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <div className="w-full h-2 bg-white/40 rounded mb-2" />
                          <div className="w-3/4 h-2 bg-white/30 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-8 bg-white rounded-xl shadow-lg p-3 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-sm font-medium text-gray-700">Screen Online</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -left-4 bottom-12 bg-white rounded-xl shadow-lg p-3 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-sm font-medium text-gray-700">Content Updated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
