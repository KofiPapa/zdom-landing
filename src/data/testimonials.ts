export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'RetailMax',
    quote: 'ZDOM transformed our in-store experience. We saw a 34% increase in promotional engagement within the first month. The drag-and-drop editor makes it easy for our team to create professional content.',
    avatar: 'SC',
  },
  {
    name: 'James Rodriguez',
    role: 'Operations Manager',
    company: 'HealthFirst Clinics',
    quote: 'Managing 200+ screens across 45 clinics used to be a nightmare. Now our team updates everything from one dashboard. The scheduling feature alone saved us 20 hours per week.',
    avatar: 'JR',
  },
  {
    name: 'Emily Watson',
    role: 'IT Director',
    company: 'Grandview Hotels',
    quote: 'The reliability is outstanding. 99.9% uptime across all our properties. The offline mode means our lobby displays never go dark, even during network maintenance.',
    avatar: 'EW',
  },
]
