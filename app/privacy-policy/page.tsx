import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - I have Tools',
  description: 'Learn how I have Tools protects your privacy when using our free online tools. We value your data security and transparency.',
  alternates: {
    canonical: 'https://apphave.fun/privacy-policy',
  },
};

export default function PrivacyPolicy() {
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
            <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" id="privacy-policy">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: August 13, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                I have Tools ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the I have Tools website (apptool.fun) and related services ("Services").
              </p>
              <p className="text-gray-700">
                By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Visited pages and visit time</li>
                <li>Referral source</li>
                <li>Usage data and preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                We may collect information you voluntarily provide, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Input data for conversion tools (amounts, currencies, units, etc.)</li>
                <li>Contact information if you contact us</li>
                <li>Feedback or comments you provide</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enhance user experience</li>
                <li>Analyze website usage</li>
                <li>Store user preferences</li>
                <li>Provide relevant advertising</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Usage Purposes</h3>
              <p className="text-gray-700 mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Provide and maintain Services</li>
                <li>Improve, personalize, and develop Services</li>
                <li>Understand and analyze how you use Services</li>
                <li>Develop new features, products, and services</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send technical information, updates, and security notices</li>
                <li>Prevent fraud and illegal activities</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Legal Basis for Processing</h3>
              <p className="text-gray-700 mb-4">
                We process your personal data based on:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Your consent</li>
                <li>Our legitimate interest in providing and improving Services</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing Information with Third Parties</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Third-Party Services</h3>
              <p className="text-gray-700 mb-4">
                We may share information with third-party service providers that help us operate Services, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li><strong>Google Analytics</strong>: for website usage analysis</li>
                <li><strong>Google AdSense</strong>: for displaying relevant ads</li>
                <li><strong>Hosting providers</strong>: for storing and serving website content</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Sharing Restrictions</h3>
              <p className="text-gray-700">
                We do not sell, trade, or transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>To comply with laws or legal processes</li>
                <li>To protect our rights, property, or safety or that of others</li>
                <li>In case of merger, acquisition, or asset sale</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Security Measures</h3>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Data encryption in transit using SSL/TLS</li>
                <li>Limited access to personal data</li>
                <li>Regular security monitoring</li>
                <li>Periodic system security updates</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Security Limitations</h3>
              <p className="text-gray-700">
                While we strive to protect your information, no method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain personal information only as long as necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-gray-700 mb-4">
                Input data for conversion tools is not permanently stored and is only temporarily processed to provide conversion results.
              </p>
              <p className="text-gray-700">
                Analytical data may be stored for up to 26 months to help us understand usage patterns and improve Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Access and Control Rights</h3>
              <p className="text-gray-700 mb-4">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Access personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Restrict processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 How to Exercise Your Rights</h3>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the contact information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Preferences</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Types of Cookies</h3>
              <p className="text-gray-700 mb-4">We use various types of cookies:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Essential Cookies</strong>: required for basic website functionality</li>
                <li><strong>Analytical Cookies</strong>: help us understand website usage</li>
                <li><strong>Advertising Cookies</strong>: used to display relevant ads</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Managing Cookies</h3>
              <p className="text-gray-700">
                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Google Services</h3>
              <p className="text-gray-700 mb-4">
                Our website uses Google services, including Google Analytics and Google AdSense. These services have their own privacy policies governing data use:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Google Privacy Policy: https://policies.google.com/privacy</li>
                <li>Google Analytics: https://policies.google.com/technologies/partner-sites</li>
                <li>Google AdSense: https://policies.google.com/technologies/ads</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 External Links</h3>
              <p className="text-gray-700">
                Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and know that your child has provided us with personal information, please contact us.
              </p>
              <p className="text-gray-700">
                If we discover that a child under 13 has provided us with personal information, we will delete such information from our servers immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfer</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and maintained on computers located outside your state, province, country, or governmental jurisdiction where data protection laws may differ.
              </p>
              <p className="text-gray-700">
                We will take all reasonably necessary steps to ensure your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically. We will notify you of changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-700">
                We recommend you review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@apptool.fun</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Jakarta, Indonesia</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                This Privacy Policy was last updated on August 13, 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
