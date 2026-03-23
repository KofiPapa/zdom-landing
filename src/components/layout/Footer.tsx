import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa'
import Container from '../ui/Container'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Solutions: [
    { label: 'Retail', href: '/solutions#retail' },
    { label: 'Healthcare', href: '/solutions#healthcare' },
    { label: 'Hospitality', href: '/solutions#hospitality' },
    { label: 'Education', href: '/solutions#education' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Help Center', href: '/contact' },
    { label: 'API Docs', href: '/contact' },
    { label: 'System Status', href: '/contact' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-accent text-gray-400 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 text-white font-bold text-lg mb-4 no-underline">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              ZDOM
            </Link>
            <p className="text-sm mb-6 text-gray-400">
              The modern digital signage platform for businesses of all sizes.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-white text-sm font-semibold mb-2">Stay updated</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 flex-1 min-w-0 outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} ZDOM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all no-underline"
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
