'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export const metadata = {
  title: 'Contact Support - I have Tools',
  description: 'Get help with I have Tools. Contact our support team for assistance with currency converter, unit converter, calculator, and other online tools.',
};

export default function ContactSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // In a real application, you would send this data to your backend API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                    <p className="text-green-800 text-center font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                    <p className="text-red-800 text-center font-medium">
                      {submitError}
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your issue or question in detail..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
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
                        <a href="mailto:support@apptool.fun" className="text-blue-600 hover:text-blue-700 ml-1">
                          support@apptool.fun
                        </a>
                      </p>
                      <p className="text-sm">
                        <strong>Technical Issues:</strong> 
                        <a href="mailto:tech@apptool.fun" className="text-blue-600 hover:text-blue-700 ml-1">
                          tech@apptool.fun
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
