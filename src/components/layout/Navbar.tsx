import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Container from '../ui/Container'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold text-white no-underline">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="text-white text-sm font-bold">Z</span>
          </div>
          ZDOM
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-gray-400 hover:text-white font-medium transition-colors no-underline text-sm group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" href="https://zdashboard.vercel.app/login">
            Sign In
          </Button>
          <Button variant="primary" size="sm" href="https://zdashboard.vercel.app/register">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5">
          <Container className="py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium py-2 no-underline transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/10" />
            <Button variant="ghost" size="sm" href="https://zdashboard.vercel.app/login">
              Sign In
            </Button>
            <Button variant="primary" size="sm" href="https://zdashboard.vercel.app/register">
              Start Free Trial
            </Button>
          </Container>
        </div>
      )}
    </nav>
  )
}
