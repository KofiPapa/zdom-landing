import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdChevronLeft, MdChevronRight, MdStar } from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 text-[200px] font-serif text-white/3 leading-none pointer-events-none select-none">"</div>
      <div className="absolute bottom-10 right-10 text-[200px] font-serif text-white/3 leading-none pointer-events-none select-none rotate-180">"</div>

      <Container className="relative">
        <SectionHeading
          label="Testimonials"
          title="Loved by Businesses Worldwide"
          subtitle="See what our customers have to say about ZDOM."
        />

        {/* Desktop: show all 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass glass-hover rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <MdStar key={j} className="text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-primary/20">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <MdStar key={j} className="text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonials[current].quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full glass text-gray-300 hover:text-white cursor-pointer">
              <MdChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full glass text-gray-300 hover:text-white cursor-pointer">
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
