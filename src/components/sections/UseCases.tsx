import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdCheck } from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useCases } from '../../data/useCases'

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = useCases[activeIndex]

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-surface-warm">
      <Container>
        <SectionHeading
          label="Use Cases"
          title="Built for Every Industry"
          subtitle="See how businesses across industries use ZDOM to engage audiences."
        />

        {/* Tabs */}
        <div className="relative flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((uc, i) => (
            <button
              key={uc.industry}
              onClick={() => setActiveIndex(i)}
              className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'text-white'
                  : 'text-gray-600 hover:text-primary bg-white border border-gray-200 hover:border-primary/30'
              }`}
            >
              {i === activeIndex && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{uc.industry}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
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
                      <MdCheck className="text-green-600" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl aspect-square flex items-center justify-center border border-gray-100 shadow-sm">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl"
              >
                {active.image}
              </motion.span>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
