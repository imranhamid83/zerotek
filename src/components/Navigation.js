'use client';

import Link from 'next/link';
import { useState } from 'react';
import TopBar from './TopBar';
import Image from 'next/image';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: 'Solar & battery',
      subItems: [
        { 
          title: 'Residential', 
          href: '/solar-battery/residential',
          description: 'Custom solar solutions for your home',
          image: '/images/solar-panels.jpg'
        },
        { 
          title: 'Commercial', 
          href: '/solar-battery/commercial',
          description: 'Enterprise-grade solar systems',
          image: '/images/solar-panels.jpg'
        },
      ],
      dropdownImage: '/images/solar-panels.jpg'
    },
    {
      title: 'Electrical',
      subItems: [
        { 
          title: 'EV Charges', 
          href: '/electrical/ev-charges',
          description: 'Smart EV charging solutions',
          image: '/images/electrical-panels.jpg'
        },
        { 
          title: 'Ventilation', 
          href: '/electrical/ventilation',
          description: 'Advanced ventilation systems',
          image: '/images/electrical-panels.jpg'
        },
      ],
      dropdownImage: '/images/electrical-panels.jpg'
    },
    {
      title: 'About ZeroTek',
      subItems: [
        { 
          title: 'About Us', 
          href: '/about/about-us',
          description: 'Our story and mission'
        },
        { 
          title: 'Our Projects', 
          href: '/about/our-projects',
          description: 'See our latest installations'
        },
        { 
          title: 'Careers', 
          href: '/about/careers',
          description: 'Join our growing team'
        },
      ],
    },
    {
      title: 'Advice & FAQs',
      subItems: [
        { 
          title: 'Solar & Battery Advice', 
          href: '/advice-faqs/solarBatteryAdvice',
          description: 'Expert guidance on solar and battery systems'
        },
        { 
          title: 'Electrical Advice', 
          href: '/advice-faqs/electricalAdvice',
          description: 'Professional electrical system guidance'
        },
        { 
          title: 'General FAQs', 
          href: '/advice-faqs/generalFaqs',
          description: 'Common questions answered'
        },
      ],
    },
  ];

  return (
    <>
      <TopBar />
      <nav className="bg-white shadow-sm pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center h-16">
              <Link href="/" className="flex items-center h-full">
                <Image
                  src="/images/logo.png"
                  alt="ZeroTek Logo"
                  width={240}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-10">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <button 
                      className="text-gray-800 hover:text-green-600 px-4 py-2 rounded-md text-lg font-semibold tracking-wide transition-colors duration-200 cursor-pointer"
                      onMouseEnter={() => setActiveMenu(index)}
                    >
                      {item.title}
                    </button>
                    <div 
                      className={`absolute left-0 w-[500px] rounded-lg shadow-xl bg-white z-50 transition-all duration-200 ${
                        activeMenu === index 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveMenu(index)}
                      onMouseLeave={() => setActiveMenu(null)}
                      style={{ top: 'calc(100% + 0.5rem)' }}
                    >
                      <div className="flex">
                        {item.dropdownImage && (
                          <div className="w-1/3">
                            <Image
                              src={item.dropdownImage}
                              alt={item.title}
                              width={200}
                              height={300}
                              className="w-full h-full object-cover rounded-l-lg"
                            />
                          </div>
                        )}
                        <div className={`py-3 ${item.dropdownImage ? 'w-2/3' : 'w-full'}`}>
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-6 py-4 hover:bg-green-50 transition-colors duration-200 cursor-pointer"
                            >
                              <div className="text-lg font-medium text-gray-900">{subItem.title}</div>
                              <div className="text-sm text-gray-500 mt-1.5">{subItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-2.5 rounded-md text-lg font-semibold tracking-wide hover:bg-green-700 transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 