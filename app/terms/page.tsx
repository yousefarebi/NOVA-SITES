import Link from "next/link";

export default function TermsOfService() {
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

      {/* Terms of Service Content */}
      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: April 21, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using the Nova Sites website (the "Site") or our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Nova Sites provides web development and design services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Custom website design and development</li>
                <li>Responsive design optimization</li>
                <li>Website maintenance and support</li>
                <li>Search engine optimization (SEO) consulting</li>
                <li>Other related digital services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Use of Website</h2>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Permitted Use</h3>
              <p className="text-gray-600 mb-4">
                You may use our website for personal and non-commercial purposes to learn about our services and contact us regarding potential projects.
              </p>

              <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-6">Prohibited Conduct</h3>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Use the Site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with the proper functioning of the Site</li>
                <li>Use automated systems to access the Site without permission</li>
                <li>Transmit malicious code or viruses</li>
                <li>Impersonate any person or entity</li>
                <li>Collect information from other users without consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Intellectual Property</h2>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Our Property</h3>
              <p className="text-gray-600 mb-4">
                All content on this Site, including text, graphics, logos, images, and software, is the property of Nova Sites or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>

              <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-6">Client Work</h3>
              <p className="text-gray-600 mb-4">
                Upon full payment, clients receive the rights to their custom-designed website as outlined in their specific service agreement. Nova Sites retains the right to display completed work in our portfolio unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Service Agreements</h2>
              <p className="text-gray-600 mb-4">
                Specific project terms, including scope, timeline, pricing, and deliverables, will be outlined in separate service agreements. In case of any conflict between these Terms and a service agreement, the service agreement shall govern for that specific project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms will be specified in your service agreement. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>A deposit may be required before work begins</li>
                <li>Final payment is typically due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>We reserve the right to suspend work for non-payment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Revisions and Changes</h2>
              <p className="text-gray-600 mb-4">
                The number of revisions included in your project will be specified in your service agreement. Additional revisions beyond the agreed scope may incur extra charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                THE SITE AND OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-600 mb-4">
                WHILE WE STRIVE TO DELIVER HIGH-QUALITY WORK, WE DO NOT GUARANTEE THAT OUR SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS OR THAT YOUR WEBSITE WILL ACHIEVE PARTICULAR BUSINESS RESULTS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOVA SITES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-600 mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES GIVING RISE TO THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Nova Sites from any claims, damages, losses, or expenses arising from your use of our Site or services, your violation of these Terms, or your infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Our services may involve third-party providers (hosting, domain registration, stock images, etc.). You are responsible for reviewing and complying with their terms and policies. We are not responsible for the acts or omissions of third-party providers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to suspend or terminate your access to our Site or services for violations of these Terms or for any other reason at our sole discretion. Upon termination, your right to use the Site will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Libya, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Libya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">14. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. The updated version will be posted on this page with a revised "Last updated" date. Your continued use of the Site after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">15. Severability</h2>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">16. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us at:
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
