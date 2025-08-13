import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - I have Tools',
  description: 'Terms of Service for I have Tools - Free online conversion tools. Learn about our terms and conditions.',
  alternates: {
    canonical: 'https://apphave.fun/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tools</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Terms of Service</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" id="terms-of-service">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: August 13, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the I have Tools website (“Service”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to all of these terms and conditions, you are not permitted to use this Service.
              </p>
              <p className="text-gray-700">
                These Terms and Conditions apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                I have Tools provides various free online conversion tools, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Currency converter</li>
                <li>Unit converter</li>
                <li>Time zone converter</li>
                <li>Simple calculator</li>
                <li>Random name wheel</li>
              </ul>
              <p className="text-gray-700">
                The Service is provided “as is” and may be modified or discontinued at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Lawful Use</h3>
              <p className="text-gray-700 mb-4">
                You agree to use the Service only for lawful purposes and in accordance with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>These Terms and Conditions</li>
                <li>Applicable laws and regulations in Indonesia</li>
                <li>Generally accepted norms</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Accurate Information</h3>
              <p className="text-gray-700 mb-4">
                You are responsible for ensuring that the information you enter into the conversion tools is accurate, and you understand that the results depend on the accuracy of the input data.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Security</h3>
              <p className="text-gray-700">
                You are responsible for maintaining the security of your device and internet connection while using the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">You are prohibited from:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Using the Service for illegal or unauthorized purposes</li>
                <li>Interfering with or disrupting the integrity or performance of the Service</li>
                <li>Attempting to access unauthorized systems or networks</li>
                <li>Using robots, spiders, or other automated tools to access the Service</li>
                <li>Spreading viruses, malware, or other harmful code</li>
                <li>Violating third-party intellectual property rights</li>
                <li>Using the Service for spam or unwanted commercial activity</li>
                <li>Abusing or manipulating available features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Content Ownership</h3>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of I have Tools or its licensors and are protected by Indonesian and international copyright laws.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Limited License</h3>
              <p className="text-gray-700 mb-4">
                We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service in accordance with these Terms and Conditions.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Restrictions</h3>
              <p className="text-gray-700">You are not permitted to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Reproduce, distribute, or create derivative works from the Service</li>
                <li>Reverse engineer or attempt to extract the source code</li>
                <li>Use the Service for commercial purposes without written permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer and Limitation of Liability</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Disclaimer of Warranties</h3>
              <p className="text-gray-700 mb-4">
                The Service is provided “as is” and “as available” without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Accuracy Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate conversion results, we do not guarantee the accuracy, completeness, or reliability of the results. Users are responsible for verifying the results before using them for important purposes.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Limitation of Liability</h3>
              <p className="text-gray-700">
                In no event shall I have Tools, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination of Service</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Termination by User</h3>
              <p className="text-gray-700 mb-4">
                You may stop using the Service at any time by ceasing to access the website.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Termination by Us</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to a violation of these Terms and Conditions.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.3 Effect of Termination</h3>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from or relating to these Terms and Conditions shall be resolved in the competent courts in Jakarta, Indonesia.
              </p>
              <p className="text-gray-700">
                If any provision of these Terms and Conditions is deemed unenforceable or invalid, such provision shall be modified and interpreted to best achieve its intent under applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms and Conditions</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. If a revision is material, we will endeavor to provide at least 30 days’ notice before the new terms take effect.
              </p>
              <p className="text-gray-700">
                By continuing to access or use the Service after such revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. General Provisions</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms and Conditions is deemed unenforceable or invalid, such provision shall be modified and interpreted to best achieve its intent under applicable law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms and Conditions constitute the entire agreement between us regarding the Service and supersede all prior or contemporaneous communications, proposals, or representations, whether oral or written.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.3 Waiver</h3>
              <p className="text-gray-700">
                Our failure to enforce any right or provision in these Terms and Conditions shall not be deemed a waiver of such right or provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@apptool.fun</p>
                <p className="text-gray-700"><strong>Address:</strong> Jakarta, Indonesia</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                This document was last updated on August 13, 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
