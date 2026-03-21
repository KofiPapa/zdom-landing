import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useCases } from '../../data/useCases'

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = useCases[activeIndex]

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-blue-50">
      <Container>
        <SectionHeading
          label="Use Cases"
          title="Built for Every Industry"
          subtitle="See how businesses across industries use ZDOM to engage audiences."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((uc, i) => (
            <button
              key={uc.industry}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all cursor-pointer ${
                i === activeIndex
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-gray-600 hover:text-primary border border-gray-200'
              }`}
            >
              {uc.industry}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {active.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{active.description}</p>
              <ul className="space-y-3">
                {active.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-8xl">{active.image}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
