import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdExpandMore } from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Got questions? We have answers. If you can't find what you're looking for, contact our support team."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqItems.map((item) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <div className={`rounded-xl border transition-all duration-300 ${open ? 'border-primary/30 bg-orange-50/50 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                  <DisclosureButton className="flex items-center justify-between w-full px-6 py-4 text-left cursor-pointer bg-transparent border-none">
                    <span className={`font-semibold pr-4 transition-colors ${open ? 'text-primary' : 'text-gray-900'}`}>{item.question}</span>
                    <MdExpandMore
                      size={24}
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180 text-primary' : ''}`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
