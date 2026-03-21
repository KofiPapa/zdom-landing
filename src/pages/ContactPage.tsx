import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

const contactInfo = [
  { icon: MdEmail, label: 'Email', value: 'hello@zdom.io' },
  { icon: MdPhone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MdLocationOn, label: 'Office', value: 'San Francisco, CA' },
]

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <info.icon size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{info.label}</div>
                  <div className="text-gray-600">{info.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="john@company.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your company"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button variant="primary" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
