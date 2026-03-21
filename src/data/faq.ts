export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'What hardware do I need to get started?',
    answer: 'You can use any screen with an HDMI input paired with a media player like Amazon Fire TV Stick, Raspberry Pi, or any Android device. We also support Samsung Tizen and LG webOS smart displays natively.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Most users are up and running in under 10 minutes. Simply plug in your device, connect it to the internet, enter your pairing code, and your screen is ready to display content.',
  },
  {
    question: 'Can I try it before committing?',
    answer: 'Absolutely! Our Free plan lets you run one screen indefinitely. For paid plans, we offer a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'What types of content can I display?',
    answer: 'Images, videos, web pages, social media feeds, weather, news, calendars, dashboards, and more. We support all major file formats and have 10+ built-in widgets for dynamic content.',
  },
  {
    question: 'Does it work without an internet connection?',
    answer: 'Yes! Our players cache content locally, so your screens continue to display content even if the internet goes down. Once connectivity is restored, screens automatically sync with the latest updates.',
  },
  {
    question: 'How do I manage screens in different locations?',
    answer: 'Our cloud-based dashboard lets you manage all screens from anywhere. Group screens by location, assign content by group, and push updates to specific screens or all at once.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Free users get community support. Starter plans include email support with 24-hour response times. Pro plans get priority support with 4-hour response times. Enterprise clients receive 24/7 phone support with a dedicated account manager.',
  },
  {
    question: 'Can multiple team members manage content?',
    answer: 'Yes! Pro and Enterprise plans support multi-user teams with role-based access control. Assign editors, viewers, or admin roles to team members across your organization.',
  },
  {
    question: 'Is my content secure?',
    answer: 'We use enterprise-grade security including SSL encryption, SOC 2 compliance, and secure device authentication. Enterprise plans also support SSO/SAML integration and custom security policies.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel anytime with no cancellation fees. Monthly plans end at the current billing period. Annual plans can be canceled with a prorated refund for unused months.',
  },
]
