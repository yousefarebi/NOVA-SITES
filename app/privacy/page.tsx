import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-gray-900">Nova Sites</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: April 21, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Nova Sites ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Contact us via email</li>
                <li>Request information about our services</li>
                <li>Communicate with us regarding a project</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include your name, email address, phone number, and any other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Sharing Your Information</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in our operations (bound by confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Third-Party Links</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any website you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="text-gray-800 font-medium">Nova Sites</p>
                <p className="text-gray-600">Email: yousef.hsarebi@gmail.com</p>
                <p className="text-gray-600">Location: Musrata, Libya</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Nova Sites. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
