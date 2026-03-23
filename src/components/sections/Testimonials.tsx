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
    <section className="py-20 lg:py-28 bg-surface">
      <Container>
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
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <MdStar key={j} className="text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
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
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <MdStar key={j} className="text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonials[current].quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light text-white font-bold flex items-center justify-center text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[current].role}, {testimonials[current].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-primary/30 cursor-pointer transition-colors">
              <MdChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-primary/30 cursor-pointer transition-colors">
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
