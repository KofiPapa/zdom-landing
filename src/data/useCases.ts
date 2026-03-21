export interface UseCase {
  industry: string
  title: string
  description: string
  benefits: string[]
  image: string
}

export const useCases: UseCase[] = [
  {
    industry: 'Retail',
    title: 'Drive Sales with Dynamic Displays',
    description: 'Promote products, flash sales, and seasonal campaigns in real time. Update pricing across all stores instantly.',
    benefits: [
      'Increase impulse purchases by up to 30%',
      'Update pricing in real time across all locations',
      'Schedule promotions by time of day',
      'Display social proof and reviews',
    ],
    image: '🏪',
  },
  {
    industry: 'Healthcare',
    title: 'Improve Patient Experience',
    description: 'Digital wayfinding, wait time displays, and health education content that keeps patients informed and calm.',
    benefits: [
      'Reduce perceived wait times by 35%',
      'Display real-time queue status',
      'Share health tips and educational content',
      'Emergency alert broadcasting',
    ],
    image: '🏥',
  },
  {
    industry: 'Hospitality',
    title: 'Elevate Your Guest Experience',
    description: 'Welcome guests, display event schedules, and showcase amenities with beautiful digital signage.',
    benefits: [
      'Personalized guest welcome messages',
      'Dynamic event and conference schedules',
      'Restaurant menu boards with real-time updates',
      'Wayfinding for large properties',
    ],
    image: '🏨',
  },
  {
    industry: 'Education',
    title: 'Connect Your Campus',
    description: 'Keep students and staff informed with announcements, schedules, and emergency notifications across campus.',
    benefits: [
      'Campus-wide announcements in seconds',
      'Class schedules and room availability',
      'Emergency alert integration',
      'Student achievement showcases',
    ],
    image: '🎓',
  },
  {
    industry: 'Corporate',
    title: 'Empower Internal Communications',
    description: 'Keep employees engaged with KPI dashboards, company news, and recognition boards.',
    benefits: [
      'Real-time KPI dashboards',
      'Company news and announcements',
      'Employee recognition walls',
      'Meeting room displays',
    ],
    image: '🏢',
  },
]
