import Container from '../components/ui/Container'

export default function LegalPages({ page }: { page: 'privacy' | 'terms' }) {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 min-h-screen">
      <Container className="max-w-3xl">
        {page === 'privacy' ? <PrivacyContent /> : <TermsContent />}
      </Container>
    </section>
  )
}

function PrivacyContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: March 1, 2026</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        We collect information you provide directly, such as your name, email address, company name, and billing information when you create an account or contact us. We also collect usage data including device information, log data, and analytics about how you use our platform.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        We use your information to provide and improve our services, process transactions, send communications, and ensure the security of our platform. We do not sell your personal information to third parties.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        We implement industry-standard security measures including SSL encryption, secure data storage, and regular security audits to protect your information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        If you have questions about this Privacy Policy, please contact us at privacy@zdom.io.
      </p>
    </div>
  )
}

function TermsContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: March 1, 2026</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        By accessing or using ZDOM, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Service Description</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        ZDOM provides a cloud-based digital signage management platform that allows users to create, manage, and display digital content on screens.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        You are responsible for maintaining the security of your account, complying with applicable laws, and ensuring that content displayed through our platform does not violate any third-party rights.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Billing and Payments</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Paid plans are billed monthly or annually as selected. You may cancel your subscription at any time. Refunds for annual plans are prorated for unused months.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        For questions regarding these terms, contact us at legal@zdom.io.
      </p>
    </div>
  )
}
