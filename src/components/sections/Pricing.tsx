import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdCheck } from 'react-icons/md'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { pricingPlans } from '../../data/pricing'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          label="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Start free. Scale as you grow. No hidden fees."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-all cursor-pointer ${
              annual ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                annual ? 'translate-x-7.5' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
            const price = annual ? plan.annualPrice : plan.monthlyPrice

            return (
              <motion.div
                ref={ref}
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'glass border-2 border-primary/50 shadow-2xl shadow-primary/10 animate-border-glow'
                    : 'glass hover:border-primary/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-primary/30">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>

                <div className="mb-6">
                  {price !== null ? (
                    <>
                      <span className="text-4xl font-bold text-gradient">${price}</span>
                      <span className="text-gray-400 text-sm">/{plan.screens}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gradient">Custom</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <MdCheck className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  href={plan.name === 'Enterprise' ? '/contact' : 'https://zdashboard.vercel.app/register'}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
