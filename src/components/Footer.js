'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const menuItems = [
    {
      title: 'Solar & battery',
      subItems: [
        { title: 'Residential', href: '/solar-battery/residential' },
        { title: 'Commercial', href: '/solar-battery/commercial' },
      ],
    },
    {
      title: 'Electrical',
      subItems: [
        { title: 'EV Charges', href: '/electrical/ev-charges' },
        { title: 'Ventilation', href: '/electrical/ventilation' },
      ],
    },
    {
      title: 'About ZeroTek',
      subItems: [
        { title: 'About Us', href: '/about/about-us' },
        { title: 'Our Projects', href: '/about/our-projects' },
        { title: 'Careers', href: '/about/careers' },
      ],
    },
    {
      title: 'Advice & FAQs',
      subItems: [
        { title: 'Solar & Battery Advice', href: '/advice-faqs/solarBatteryAdvice' },
        { title: 'Electrical Advice', href: '/advice-faqs/electricalAdvice' },
        { title: 'General FAQs', href: '/advice-faqs/generalFaqs' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center justify-center md:justify-start">
                <Image
                  src="/images/logo.png"
                  alt="ZeroTek Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ZeroTek. All rights reserved.
              </p>
              <div className="mt-2 space-x-4">
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 