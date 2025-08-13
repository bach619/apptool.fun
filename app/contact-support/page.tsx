import Link from 'next/link';
import { ArrowLeft, Mail, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Contact Support - I have Tools',
  description: 'Get help with I have Tools. Contact our support team for assistance with currency converter, unit converter, calculator, and other online tools.',
};

export default function ContactSupport() {
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
            <h1 className="text-xl font-bold text-gray-900">Contact Support</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to assist you with any questions or issues you may have with our free online tools. 
            Choose the best way to reach us below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Send us a Message</span>
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <Input placeholder="What's this about?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={6}
                  placeholder="Please describe your question or issue in detail..."
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Support */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-3">
                      Get help via email for any questions about our tools or technical issues.
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <strong>General Support:</strong> 
                        <a href="mailto:support@ihavetools.com" className="text-blue-600 hover:text-blue-700 ml-1">
                          support@ihavetools.com
                        </a>
                      </p>
                      <p className="text-sm">
                        <strong>Technical Issues:</strong> 
                        <a href="mailto:tech@ihavetools.com" className="text-blue-600 hover:text-blue-700 ml-1">
                          tech@ihavetools.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Times</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Email Support:</strong> Within 24 hours</p>
                      <p><strong>Technical Issues:</strong> Within 12 hours</p>
                      <p><strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                      <p><strong>Weekend Support:</strong> Limited availability</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Information</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Company:</strong> I have Tools</p>
                      <p><strong>Website:</strong> https://apphave.fun</p>
                      <p><strong>Service Area:</strong> Global</p>
                      <p><strong>Languages:</strong> English</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions about our tools and services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Are your tools free to use?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Yes, all our conversion tools and calculators are completely free to use. 
                  No registration or payment required.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">How accurate are the conversion results?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our tools use the latest exchange rates and conversion factors. Currency rates 
                  are updated regularly, but we recommend verifying critical conversions.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">Can I use these tools on mobile?</h4>
                <p className="text-sm text-gray-600">
                  Absolutely! All our tools are fully responsive and work perfectly on 
                  smartphones, tablets, and desktop computers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you store my conversion data?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  No, we don't store your conversion inputs or results. All calculations 
                  are performed locally in your browser for privacy.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">Can I suggest new features?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We'd love to hear your suggestions! Send us an email with your ideas 
                  for new tools or improvements to existing ones.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">Is there an API available?</h4>
                <p className="text-sm text-gray-600">
                  Currently, we don't offer a public API, but we're considering it for 
                  future development. Contact us if you're interested.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <div className="text-center mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Still need help?</h3>
          <p className="text-blue-700 mb-6">
            If you can't find the answer you're looking for, don't hesitate to reach out. 
            We're here to help make your experience with our tools as smooth as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </Button>
            <Link href="/privacy-policy">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
