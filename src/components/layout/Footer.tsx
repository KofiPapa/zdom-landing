import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa'
import Container from '../ui/Container'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Solutions: [
    { label: 'Retail', href: '#' },
    { label: 'Healthcare', href: '#' },
    { label: 'Hospitality', href: '#' },
    { label: 'Education', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'System Status', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4 no-underline">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              ZDOM
            </Link>
            <p className="text-sm mb-6">
              The modern digital signage platform for businesses of all sizes.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-white text-sm font-semibold mb-2">Stay updated</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 flex-1 min-w-0 outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors no-underline text-gray-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} ZDOM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all no-underline"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
