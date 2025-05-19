'use client';

import Link from 'next/link';

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

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-800 rounded-lg px-8 py-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:01494314971" className="text-gray-300 hover:text-green-400 transition-colors">
                01494 314 971
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:hello@zero-tek.co.uk" className="text-gray-300 hover:text-green-400 transition-colors">
                hello@zero-tek.co.uk
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link 
                href="/contact" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} ZeroTek Group Limited. All rights reserved.
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