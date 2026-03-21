import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-indigo-600 to-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Screens?
          </h2>
          <p className="text-lg text-indigo-200 mb-10 leading-relaxed">
            Join 2,000+ businesses using ZDOM to captivate their audiences.
            Start your free trial today -- no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              href="/signup"
              className="!bg-white !text-primary hover:!bg-gray-100"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
