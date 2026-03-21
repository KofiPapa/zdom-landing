export interface PricingPlan {
  name: string
  monthlyPrice: number | null
  annualPrice: number | null
  description: string
  features: string[]
  cta: string
  popular?: boolean
  screens: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Perfect for testing and small projects.',
    screens: '1 screen',
    features: [
      '1 screen',
      '5 GB storage',
      'Basic templates',
      'Standard support',
      'Community access',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Starter',
    monthlyPrice: 12,
    annualPrice: 10,
    description: 'Ideal for small businesses getting started.',
    screens: 'per screen/mo',
    features: [
      'Up to 10 screens',
      '25 GB storage',
      'All templates',
      'Scheduling',
      'Email support',
      'Basic analytics',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    monthlyPrice: 20,
    annualPrice: 16,
    description: 'For growing businesses with multiple locations.',
    screens: 'per screen/mo',
    popular: true,
    features: [
      'Up to 100 screens',
      '100 GB storage',
      'All templates + custom',
      'Advanced scheduling',
      'Priority support',
      'Advanced analytics',
      'Multi-user teams',
      'Proof of play',
      'API access',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solutions for large organizations.',
    screens: 'custom pricing',
    features: [
      'Unlimited screens',
      'Unlimited storage',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'SLA guarantee',
      'SSO & SAML',
      'On-premise option',
      'Custom training',
      'White-label option',
    ],
    cta: 'Contact Sales',
  },
]
