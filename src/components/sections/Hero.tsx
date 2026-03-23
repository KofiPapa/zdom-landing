import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdAutoAwesome } from 'react-icons/md'
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
  { value: 10000, suffix: '+', label: 'Screens Deployed' },
  { value: 2000, suffix: '+', label: 'Businesses' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  { value: 50, suffix: '+', label: 'Countries' },
]

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-surface overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        {/* Decorative ring */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-dashed border-white/3 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary-light font-semibold text-sm px-5 py-2 rounded-full mb-6 backdrop-blur-sm">
              <MdAutoAwesome className="w-4 h-4 text-accent" />
              #1 Cloud Digital Signage Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Turn Any Screen Into a{' '}
            <span className="text-gradient">
              Powerful Digital Sign
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
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
            <Button variant="primary" size="lg" href="https://zdashboard.vercel.app/register">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              See How It Works
            </Button>
          </motion.div>

          {/* Animated mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            {/* Glow behind mockup */}
            <div className="absolute inset-4 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 rounded-3xl blur-2xl animate-gradient-shift" />

            <div className="relative glass rounded-2xl p-2 shadow-2xl shadow-primary/10">
              <div className="bg-gradient-to-br from-primary/80 via-primary to-secondary rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-center text-white p-8 w-full">
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                      <div className="w-full h-2 bg-white/30 rounded mb-2" />
                      <div className="w-3/4 h-2 bg-white/20 rounded mb-4" />
                      <div className="w-full h-16 bg-white/15 rounded" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                      <div className="w-full h-20 bg-white/15 rounded mb-2" />
                      <div className="w-full h-2 bg-white/30 rounded mb-2" />
                      <div className="w-2/3 h-2 bg-white/20 rounded" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 col-span-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-secondary rounded-full flex-shrink-0" />
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
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 glass rounded-xl p-3 hidden lg:block shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
                <span className="text-sm font-medium text-white">Screen Online</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-12 glass rounded-xl p-3 hidden lg:block shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/50" />
                <span className="text-sm font-medium text-white">Content Updated</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-12 -bottom-4 glass rounded-xl p-3 hidden lg:block shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50" />
                <span className="text-sm font-medium text-white">99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass rounded-xl p-5 hover:bg-white/8 transition-colors duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
