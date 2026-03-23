import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import CTA from '../components/sections/CTA'

const blogPosts = [
  {
    title: '10 Digital Signage Content Ideas for Retail Stores',
    excerpt: 'Discover creative ways to use digital signage to boost foot traffic, promote sales, and enhance the shopping experience in your retail store.',
    category: 'Tips & Tricks',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    image: '🛍️',
  },
  {
    title: 'How to Set Up Digital Menu Boards in 15 Minutes',
    excerpt: 'A step-by-step guide to creating beautiful, dynamic menu boards for restaurants and cafes using ZDOM\'s drag-and-drop editor.',
    category: 'Tutorials',
    date: 'Mar 10, 2026',
    readTime: '8 min read',
    image: '🍔',
  },
  {
    title: 'The ROI of Digital Signage: What the Data Says',
    excerpt: 'We analyzed data from 500+ businesses to understand the real impact of digital signage on sales, engagement, and brand awareness.',
    category: 'Industry Insights',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    image: '📊',
  },
  {
    title: 'Digital Signage for Healthcare: A Complete Guide',
    excerpt: 'Learn how hospitals and clinics use digital signage to improve patient experience, reduce wait time perception, and streamline communication.',
    category: 'Industry Insights',
    date: 'Feb 28, 2026',
    readTime: '10 min read',
    image: '🏥',
  },
  {
    title: 'Template Design Best Practices for Digital Signs',
    excerpt: 'Design tips and principles for creating effective digital signage content that captures attention and communicates your message clearly.',
    category: 'Design',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    image: '🎨',
  },
  {
    title: 'Managing 100+ Screens: Enterprise Signage Tips',
    excerpt: 'Strategies and best practices for managing large-scale digital signage deployments across multiple locations and time zones.',
    category: 'Enterprise',
    date: 'Feb 15, 2026',
    readTime: '9 min read',
    image: '🖥️',
  },
]

const categories = ['All', 'Tutorials', 'Tips & Tricks', 'Industry Insights', 'Design', 'Enterprise']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20" style={{ background: 'linear-gradient(135deg, #ECF7FF 0%, #FFFFFF 40%, #FFF3EC 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Digital Signage <span className="text-gradient-warm">Insights & Tips</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn best practices, industry trends, and expert tips to get the most out of your digital signage.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover group"
              >
                <div className="bg-gradient-to-br from-orange-50 to-blue-50 h-48 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{post.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-orange-50 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="text-xs text-gray-400">{post.date}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
