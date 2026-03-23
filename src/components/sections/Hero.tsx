import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdPlayArrow, MdCheck } from 'react-icons/md'
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 10000, suffix: '+', label: 'Screens Deployed' },
  { value: 2000, suffix: '+', label: 'Businesses' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  { value: 50, suffix: '+', label: 'Countries' },
]

const heroChecks = [
  'No credit card required',
  'Free forever plan',
  'Setup in 5 minutes',
]

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #ECF7FF 0%, #FFFFFF 40%, #FFF3EC 100%)' }}>
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                🚀 #1 Digital Signage Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Turn Any Screen Into a{' '}
              <span className="text-gradient-warm">Smart Digital Sign</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Create, schedule, and manage stunning signage content from anywhere. Drag-and-drop simplicity. Enterprise-grade reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <Button variant="primary" size="lg" href="https://zdashboard.vercel.app/register">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" href="#how-it-works">
                <MdPlayArrow className="mr-1" size={20} />
                See How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {heroChecks.map((check) => (
                <span key={check} className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                  <MdCheck className="text-green-500" size={16} />
                  {check}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 p-3 overflow-hidden">
              <div className="bg-gradient-to-br from-secondary via-secondary to-primary rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center text-white p-6 w-full">
                  <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3">
                      <div className="w-full h-2 bg-white/30 rounded mb-2" />
                      <div className="w-3/4 h-2 bg-white/20 rounded mb-3" />
                      <div className="w-full h-14 bg-white/15 rounded" />
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3">
                      <div className="w-full h-16 bg-white/15 rounded mb-2" />
                      <div className="w-full h-2 bg-white/30 rounded mb-2" />
                      <div className="w-2/3 h-2 bg-white/20 rounded" />
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 col-span-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/40 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <div className="w-full h-2 bg-white/30 rounded mb-2" />
                          <div className="w-3/4 h-2 bg-white/20 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-6 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-sm font-medium text-gray-700">5 Screens Online</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-10 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 hidden lg:block"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mt-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
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
