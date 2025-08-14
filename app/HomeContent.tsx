'use client';

import { useState } from 'react';
import { Calculator, DollarSign, Clock, Scale, Shuffle } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import { useEffect } from 'react';
import CurrencyConverter from '@/components/CurrencyConverter';
import UnitConverter from '@/components/UnitConverter';
import TimeZoneConverter from '@/components/TimeZoneConverter';
import SimpleCalculator from '@/components/SimpleCalculator';
import WheelOfNames from '@/components/WheelOfNames';
import Image from 'next/image';
import Link from 'next/link';

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
        <h1 className="text-3xl font-bold text-center mb-8">Free Online Tools for Instant Conversions & Calculations</h1>
        <ActiveComponent />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
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
