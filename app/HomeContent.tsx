'use client';

import { useState, useEffect, Suspense, lazy } from 'react';
import { Calculator, DollarSign, Clock, Scale, Shuffle, Zap, Target, Lock, Gift, HardDrive } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useUrlParams } from '@/hooks/useUrlParams';
import Image from 'next/image';
import Link from 'next/link';

// Lazy load components
const CurrencyConverter = lazy(() => import('@/components/CurrencyConverter'));
const UnitConverter = lazy(() => import('@/components/UnitConverter'));
const TimeZoneConverter = lazy(() => import('@/components/TimeZoneConverter'));
const SimpleCalculator = lazy(() => import('@/components/SimpleCalculator'));
const WheelOfNames = lazy(() => import('@/components/WheelOfNames'));
const DataStorageConverter = lazy(() => import('@/components/DataStorageConverter'));

const tools = [
  { id: 'wheel', name: 'Wheel of Names', icon: Shuffle, component: WheelOfNames },
  { id: 'currency', name: 'Currency Converter', icon: DollarSign, component: CurrencyConverter },
  { id: 'units', name: 'Unit Converter', icon: Scale, component: UnitConverter },
  { id: 'timezone', name: 'Time Zone Converter', icon: Clock, component: TimeZoneConverter },
  { id: 'calculator', name: 'Calculator', icon: Calculator, component: SimpleCalculator },
  { id: 'datastorage', name: 'Data Storage Converter', icon: HardDrive, component: DataStorageConverter },
];

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState('wheel');
  const urlParams = useUrlParams();

  // Set active tab based on URL parameter
  useEffect(() => {
    if (urlParams.tool) {
    const toolMap: Record<string, string> = {
      'Currency Converter': 'currency',
      'Unit Converter': 'units',
      'Time Zone Converter': 'timezone',
      'Calculator': 'calculator',
      'Wheel of Names': 'wheel',
      'Data Storage Converter': 'datastorage',
    };
      
      const tabId = toolMap[urlParams.tool] || urlParams.tool;
      if (tools.find(tool => tool.id === tabId)) {
        setActiveTab(tabId);
      }
    }
  }, [urlParams]);
  const ActiveComponent = tools.find(tool => tool.id === activeTab)?.component || CurrencyConverter;

  return (
    <>
      {/* Navigation Tabs */}
<nav className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 lg:space-x-8 overflow-x-auto">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
<button
  key={tool.id}
  onClick={() => setActiveTab(tool.id)}
  className={`flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 py-2 px-1 sm:py-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
    activeTab === tool.id
      ? 'border-blue-500 text-blue-600 font-bold'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className={activeTab === tool.id ? 'font-bold' : ''}>{tool.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
<main className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
  <div className="text-center mb-6 sm:mb-10">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Free Online Tools for Instant Conversions & Calculations</h1>
    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Welcome to I have Tools - your one-stop solution for all conversion and calculation needs. 
            Our free online tools help you quickly convert currencies, units, time zones, and more. 
            No downloads or registration required - just select a tool and start converting!
          </p>
        </div>
        
        <Suspense fallback={
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse">
            <div className="flex flex-col items-center justify-center h-64">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        }>
          <ActiveComponent />
        </Suspense>
        
{/* Why Choose Our Tools */}
<div className="mt-8 sm:mt-12 bg-gray-50 rounded-xl p-4 sm:p-8 border border-gray-200">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Our Tools?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get instant results without delays. Our optimized algorithms ensure speedy calculations even for complex conversions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Accurate Results</h3>
              <p className="text-gray-600">Precise calculations using up-to-date conversion rates from reliable financial sources. Updated hourly for maximum accuracy.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy Focused</h3>
              <p className="text-gray-600">Your data stays securely on your device - we never store your inputs. All calculations happen locally in your browser.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Completely Free</h3>
              <p className="text-gray-600">All tools are 100% free to use with no hidden costs or premium tiers. Essential tools should be accessible to everyone.</p>
            </div>
          </div>
          
<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
  <h3 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4">Popular Tool Uses</h3>
  <ul className="grid grid-cols-1 gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Convert currency for international travel planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Calculate recipe measurements for cooking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Schedule meetings across different time zones</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Solve everyday math problems quickly</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

{/* FAQ Section with Accordion */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
  <div className="bg-white rounded-xl p-4 sm:p-8 border border-gray-200">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="currency">
<AccordionTrigger className="text-left hover:no-underline px-0 py-2 sm:py-0">
  <span className="text-base sm:text-lg font-semibold text-gray-900 text-left">How do I use the free online currency converter?</span>
</AccordionTrigger>
<AccordionContent className="px-0">
  <div className="text-gray-600 text-sm sm:text-base">
    <p className="mb-3">Our currency converter is designed for simplicity and accuracy:</p>
    <ol className="list-decimal pl-5 space-y-2">
      <li>Select the Currency Converter tool from the navigation</li>
      <li>Enter the amount you want to convert in the input field</li>
      <li>Choose the source currency from the dropdown menu</li>
      <li>Select the target currency for conversion</li>
      <li>View the converted amount instantly</li>
    </ol>
    <p className="mt-3">We update exchange rates every hour using data from reliable financial sources to ensure accuracy. You can also view historical exchange rate trends for better financial planning.</p>
  </div>
</AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cooking">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Can I convert cooking measurements with your unit converter?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-600">
                  <p className="mb-3">Yes, our unit converter is ideal for cooking and baking conversions:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Convert between cups, tablespoons, teaspoons, milliliters, fluid ounces</li>
                    <li>Switch between grams, ounces, pounds for dry ingredients</li>
                    <li>Temperature conversions (Celsius to Fahrenheit)</li>
                    <li>Volume to weight conversions for common ingredients</li>
                  </ul>
                  <p>We've included a special "Cooking Mode" that shows only relevant units and provides conversion tips for common ingredients like flour, sugar, butter, and more.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="timezone">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How can I schedule meetings across time zones?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-600">
                  <p className="mb-3">Our Time Zone Converter simplifies global scheduling:</p>
                  <ol className="list-decimal pl-5 space-y-2 mb-3">
                    <li>Select your local time zone</li>
                    <li>Add the time zones of all meeting participants</li>
                    <li>Set your proposed meeting time</li>
                    <li>See equivalent times in all participants' locations</li>
                    <li>Find overlapping business hours automatically</li>
                  </ol>
                  <p>The tool also accounts for Daylight Saving Time changes and provides a shareable link to send the meeting proposal to all participants.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="wheel">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What are practical uses for the random name picker wheel?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-600">
                  <p className="mb-3">Our Wheel of Names is versatile for many scenarios:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li><strong>Classroom:</strong> Randomly select students for participation</li>
                    <li><strong>Giveaways:</strong> Fairly pick contest winners from entries</li>
                    <li><strong>Decision Making:</strong> Choose between options when undecided</li>
                    <li><strong>Team Building:</strong> Assign tasks or roles randomly</li>
                    <li><strong>Games:</strong> Create random teams or select game challenges</li>
                  </ul>
                  <p>You can customize the wheel with colors, save wheel configurations, and even add images for each entry. The tool works offline once loaded for reliable use anywhere.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="calculator">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What types of calculations can I perform with your calculator?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-600">
                  <p className="mb-3">Our calculator handles a wide range of everyday calculations:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Basic arithmetic (addition, subtraction, multiplication, division)</li>
                    <li>Percentage calculations (discounts, tips, tax, markups)</li>
                    <li>Memory functions for storing and recalling values</li>
                    <li>Square roots and exponents</li>
                    <li>Simple financial calculations (interest, loan payments)</li>
                  </ul>
                  <p>The calculator features a full calculation history, keyboard support, and a responsive design that works on all devices. For complex scientific calculations, we're developing an advanced calculator module.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How do you protect my data and privacy?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-600">
                  <p className="mb-3">Your privacy is our top priority:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>All calculations happen locally in your browser - no data sent to servers</li>
                    <li>We don't store any personal information or conversion inputs</li>
                    <li>No tracking cookies for analytics or advertising</li>
                    <li>Secure HTTPS connection for all data transmission</li>
                    <li>Regular security audits of our codebase</li>
                  </ul>
                  <p>For more details, please review our comprehensive <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Footer */}
<footer className="bg-gray-900 text-white mt-8 sm:mt-12">
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="I have Tools Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <h3 className="text-xl font-bold">I have Tools</h3>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Free online tools for everyone. Convert currencies, units, time zones, calculate, and more. 
                Fast, accurate, and no installation required.
              </p>
              <p className="text-gray-300">Explore our full collection of free online tools designed to simplify your daily tasks.</p>
              <div className="text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} I have Tools. All rights reserved.</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Currency Converter
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Unit Converter
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Time Zone Converter
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Wheel of Names
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal & Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact-support" className="hover:text-white transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
<div className="text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
  <p>Made with ❤️ for everyone who needs quick, reliable online tools.</p>
</div>
<div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 text-sm text-gray-400">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms
                </Link>
                <a href="/contact-support" className="hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
