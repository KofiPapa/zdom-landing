export interface UseCase {
  industry: string
  title: string
  description: string
  benefits: string[]
  image: string
}

export const useCases: UseCase[] = [
  {
    industry: 'Restaurants',
    title: 'Dynamic Digital Menu Boards',
    description: 'Replace static menus with eye-catching digital displays. Update prices, add daily specials, and rotate promotions in real time — no reprinting needed.',
    benefits: [
      'Update menu items and prices instantly',
      'Schedule breakfast, lunch, and dinner menus automatically',
      'Upsell combos and specials with vivid imagery',
      'Multi-screen layouts for large menu boards',
    ],
    image: '/images/portfolio/ramonas-kitchen.png',
  },
  {
    industry: 'Fast Food',
    title: 'Drive Orders with Combo Displays',
    description: 'Showcase numbered combos, limited-time offers, and student deals on bright, attention-grabbing screens that boost average order value.',
    benefits: [
      'Increase average order value by up to 25%',
      'Highlight daily deals and combo promotions',
      'Schedule student pricing during peak hours',
      'Portrait and landscape screen support',
    ],
    image: '/images/portfolio/pizza-combos.png',
  },
  {
    industry: 'Retail',
    title: 'In-Store Product Showcases',
    description: 'Transform your retail space with digital displays that highlight brands, promotions, and product information customers actually notice.',
    benefits: [
      'Promote brands and new arrivals automatically',
      'Display product demos and how-to content',
      'Rotate seasonal campaigns on a schedule',
      'Works on any TV, monitor, or display',
    ],
    image: '/images/portfolio/paint-store.png',
  },
  {
    industry: 'Cafes & Desserts',
    title: 'Showcase Every Flavor',
    description: 'From ice cream parlors to bubble tea shops, display your full menu with mouth-watering photos that make customers order more.',
    benefits: [
      'Beautiful portrait menu boards for small spaces',
      'Detailed descriptions with ingredient highlights',
      'Seasonal flavor rotations on a timer',
      'Eye-catching animations that draw attention',
    ],
    image: '/images/portfolio/ice-cream-shop.png',
  },
  {
    industry: 'Multi-Location',
    title: 'Manage Every Screen From One Dashboard',
    description: 'Whether you have 2 locations or 200, update content across your entire network from a single dashboard. Consistency made simple.',
    benefits: [
      'Push updates to all locations simultaneously',
      'Group screens by location or region',
      'Per-location pricing and specials support',
      'Remote monitoring with real-time status',
    ],
    image: '/images/portfolio/burgerim.png',
  },
]
