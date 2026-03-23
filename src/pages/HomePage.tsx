import Hero from '../components/sections/Hero'
import LogoBar from '../components/sections/LogoBar'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import UseCases from '../components/sections/UseCases'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
