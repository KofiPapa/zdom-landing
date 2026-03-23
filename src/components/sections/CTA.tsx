import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating decorative dots */}
      <div className="absolute top-20 left-[15%] w-3 h-3 rounded-full bg-primary/40 animate-float" />
      <div className="absolute top-32 right-[20%] w-2 h-2 rounded-full bg-secondary/40 animate-float-reverse" />
      <div className="absolute bottom-24 left-[25%] w-2.5 h-2.5 rounded-full bg-accent/40 animate-float-slow" />
      <div className="absolute bottom-16 right-[15%] w-2 h-2 rounded-full bg-primary-light/40 animate-float" style={{ animationDelay: '2s' }} />

      <Container className="relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Screens?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Join 2,000+ businesses using ZDOM to captivate their audiences.
            Start your free trial today -- no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="white"
              size="lg"
              href="https://zdashboard.vercel.app/register"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
            >
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
