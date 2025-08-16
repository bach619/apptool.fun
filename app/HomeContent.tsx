'use client';

import { useState, useEffect, Suspense, lazy } from 'react';
import { Calculator, DollarSign, Clock, Scale, Shuffle } from 'lucide-react';
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

const tools = [
  { id: 'wheel', name: 'Wheel of Names', icon: Shuffle, component: WheelOfNames },
  { id: 'currency', name: 'Currency', icon: DollarSign, component: CurrencyConverter },
  { id: 'units', name: 'Units', icon: Scale, component: UnitConverter },
  { id: 'timezone', name: 'Time Zone', icon: Clock, component: TimeZoneConverter },
  { id: 'calculator', name: 'Calculator', icon: Calculator, component: SimpleCalculator },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Free Online Tools for Instant Conversions & Calculations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to I have Tools - your one-stop solution for all conversion and calculation needs. 
            Our free online tools help you quickly convert currencies, units, time zones, and more. 
            No downloads or registration required - just select a tool and start converting!
          </p>
        </div>
        
        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading tool...</div>}>
          <ActiveComponent />
        </Suspense>
        
        {/* Why Choose Our Tools */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get instant results without delays or loading times</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Accurate Results</h3>
              <p className="text-gray-600">Precise calculations using up-to-date conversion rates</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy Focused</h3>
              <p className="text-gray-600">Your data stays on your device - we never store your inputs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🎁</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Completely Free</h3>
              <p className="text-gray-600">All tools are 100% free to use with no hidden costs</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Popular Tool Uses</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="currency">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How do I use the free online currency converter?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Simply select the Currency Converter tool, enter the amount you want to convert, 
                  choose your source and target currencies, and get instant conversion results 
                  using real-time exchange rates.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cooking">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Is there a unit conversion calculator for cooking measurements?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Yes! Our unit converter supports all common cooking measurements including cups, 
                  tablespoons, teaspoons, milliliters, grams, and ounces - perfect for recipes.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="timezone">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Can I convert time zones for international meetings?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Absolutely. Our time zone converter helps you schedule meetings across different 
                  time zones by showing equivalent times in multiple locations simultaneously.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="wheel">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How does the random name picker wheel work?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Enter names into the wheel, spin it, and our random name picker will select a 
                  winner. Perfect for giveaways, classroom activities, or decision making.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="calculator">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Is this simple web calculator suitable for complex math?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Our calculator handles basic arithmetic operations (addition, subtraction, 
                  multiplication, division) and is perfect for everyday calculations.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <p>Visit <b><a href="https://instapure.fun" target="_blank">Instagram Downloader</a></b></p>
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
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                <p>Made with ❤️ for everyone who needs quick, reliable online tools.</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
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
