import Link from 'next/link';
import { ArrowLeft, Target, Users, Shield, Zap, Globe, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - I have Tools',
  description: 'Learn about I have Tools - your trusted source for free online conversion tools, calculators, and utilities. Discover our mission and values.',
};

export default function AboutUs() {
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
            <h1 className="text-xl font-bold text-gray-900">About Us</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="I have Tools Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About I have Tools</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're passionate about creating simple, powerful, and accessible online tools that make 
            everyday calculations and conversions effortless for everyone, everywhere.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To provide free, accurate, and user-friendly online tools that simplify complex 
                calculations and conversions. We believe that essential utilities should be 
                accessible to everyone, regardless of their technical background or financial situation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-600" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted platform for online conversion tools and calculators, 
                empowering millions of users worldwide to make quick, accurate calculations with confidence 
                and ease.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Currency Converter</h3>
                <p className="text-sm text-gray-600">
                  Real-time exchange rates for 180+ currencies with accurate, up-to-date conversions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📏</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unit Converter</h3>
                <p className="text-sm text-gray-600">
                  Convert between different units of measurement including length, weight, temperature, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Zone Converter</h3>
                <p className="text-sm text-gray-600">
                  Compare times across different time zones worldwide with live clock displays.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧮</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculator</h3>
                <p className="text-sm text-gray-600">
                  Modern, responsive calculator with keyboard support and memory functions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wheel of Names</h3>
                <p className="text-sm text-gray-600">
                  Interactive spinning wheel for random name selection and decision making.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">More Tools</h3>
                <p className="text-sm text-gray-600">
                  We're constantly adding new tools based on user feedback and emerging needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
                    <p className="text-gray-600">
                      We don't store your personal data or conversion inputs. All calculations 
                      happen locally in your browser, ensuring your privacy is protected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Speed & Accuracy</h3>
                    <p className="text-gray-600">
                      Our tools are optimized for speed without compromising accuracy. Get instant 
                      results with reliable calculations you can trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Centric Design</h3>
                    <p className="text-gray-600">
                      Every feature is designed with the user in mind. Simple interfaces, 
                      intuitive navigation, and responsive design across all devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Free</h3>
                    <p className="text-gray-600">
                      We believe essential tools should be accessible to everyone. All our 
                      tools are free to use with no hidden fees or premium restrictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Why Choose I have Tools?</CardTitle>
            <CardDescription className="text-center">
              Here's what sets us apart from other online tool providers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">No Registration Required</h4>
                  <p className="text-sm text-blue-700">
                    Start using our tools immediately without creating accounts or providing personal information.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mobile Optimized</h4>
                  <p className="text-sm text-green-700">
                    All tools work perfectly on smartphones, tablets, and desktops with responsive design.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Regular Updates</h4>
                  <p className="text-sm text-purple-700">
                    We continuously update our tools with new features and improved accuracy.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Share Results</h4>
                  <p className="text-sm text-orange-700">
                    Easily share your conversion results with others via URL or social media.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-teal-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-teal-900 mb-2">Keyboard Shortcuts</h4>
                  <p className="text-sm text-teal-700">
                    Power users can navigate and use tools efficiently with keyboard shortcuts.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-900 mb-2">24/7 Availability</h4>
                  <p className="text-sm text-red-700">
                    Our tools are available around the clock, whenever you need them.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Commitment */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            We're committed to providing reliable, accurate, and free online tools that make your 
            daily tasks easier. Your trust is important to us, and we work hard to earn it every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Free to Use</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm opacity-90">Data Stored</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Get in Touch</CardTitle>
            <CardDescription className="text-center">
              Have questions, suggestions, or feedback? We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Questions about our tools or suggestions for new features
                </p>
                <a 
                  href="mailto:info@apptool.fun" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  info@apptool.fun
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Support</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Having trouble with our tools? We're here to help
                </p>
                <a 
                  href="mailto:support@apptool.fun" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  support@apptool.fun
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-support">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
              </Link>
              <Link href="/">
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Try Our Tools
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
