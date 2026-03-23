import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

const heroImages = [
  { src: '/images/portfolio/ramonas-kitchen.png', label: "Ramona's Kitchen — 4 Screens" },
  { src: '/images/portfolio/burgerim.png', label: 'Burgerim — Multi-Display Setup' },
  { src: '/images/portfolio/bubble-tea-shop.png', label: 'Bubble Tea Bar — 5 Screens' },
  { src: '/images/portfolio/pizza-combos.png', label: 'Pizza & Poutine — Combo Displays' },
  { src: '/images/portfolio/red-menu-board.png', label: 'Soul Food Kitchen — Menu Boards' },
]

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0)

  // Auto-cycle images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

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

          {/* Right: Real Client Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main image carousel */}
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl shadow-gray-300/50 border border-gray-200/60 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 ml-3">
                  <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 text-center max-w-xs mx-auto">
                    zplayer-blue.vercel.app
                  </div>
                </div>
              </div>

              {/* Image area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={heroImages[activeImage].src}
                    alt={heroImages[activeImage].label}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>

                {/* Gradient overlay at bottom for text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20" />

                {/* Label */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-white text-sm font-medium">
                    {heroImages[activeImage].label}
                  </span>
                  <span className="bg-primary/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Live
                  </span>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="bg-slate-800 px-4 py-2 flex items-center justify-center gap-2">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === activeImage
                        ? 'w-6 h-2 bg-primary'
                        : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating thumbnail previews */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-8 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 p-1.5 hidden lg:block"
            >
              <img
                src="/images/portfolio/paint-store.png"
                alt="Retail display"
                className="w-24 h-16 object-cover rounded-lg"
              />
              <p className="text-[10px] text-gray-500 mt-1 text-center font-medium">Retail Display</p>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 bottom-16 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 p-1.5 hidden lg:block"
            >
              <img
                src="/images/portfolio/ice-cream-shop.png"
                alt="Ice cream menu"
                className="w-24 h-16 object-cover rounded-lg"
              />
              <p className="text-[10px] text-gray-500 mt-1 text-center font-medium">Menu Board</p>
            </motion.div>

            {/* Live status badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 bottom-20 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 px-3 py-2 hidden lg:flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">5 Screens Online</span>
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
