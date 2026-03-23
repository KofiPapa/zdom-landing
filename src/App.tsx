import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import LegalPages from './pages/LegalPages'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPages page="privacy" />} />
          <Route path="/terms" element={<LegalPages page="terms" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
