'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Image from 'next/image';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      title: 'Solar',
      subItems: [
        { 
          title: 'Solar Panels', 
          href: '/solar-battery/solar-panels',
          description: 'Custom solar solutions for your home',
          image: '/images/solar/residential.jpg'
        },
        { 
          title: 'Batteries', 
          href: '/solar-battery/batteries',
          description: 'Enhance your solar system with a battery',
          image: '/images/solar/commercial.jpg'
        },
        { 
          title: 'Maintenance', 
          href: '/solar-battery/maintenance',
          description: 'Maintain your solar system',
          image: '/images/solar/commercial.jpg'
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
          title: 'Domestic Services', 
          href: '/electrical/domestic-services',
          description: 'Domestic electrical services',
          image: '/images/electrical-panels.jpg'
        },
      ],
      dropdownImage: '/images/electrical-zerotek-electrical-panels.jpg'
    },
    {
      title: 'Ventilation',
      subItems: [
        { 
          title: 'IEV', 
          href: '/ventilation/iev',
          description: 'Intermittent Extract Ventilation systems',
          image: '/images/ventilation.jpg'
        },
        { 
          title: 'CMEV', 
          href: '/ventilation/cmev',
          description: 'Central Mechanical Extract Ventilation',
          image: '/images/ventilation.jpg'
        },
        { 
          title: 'DMEV', 
          href: '/ventilation/dmev',
          description: 'Decentralized Mechanical Extract Ventilation',
          image: '/images/ventilation.jpg'
        },
        { 
          title: 'MVHR', 
          href: '/ventilation/mvhr',
          description: 'Mechanical Ventilation with Heat Recovery',
          image: '/images/ventilation.jpg'
        },
      ],
      dropdownImage: '/images/ventilation.jpg'
    },
    {
      title: 'About Us',
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
          title: 'Solar &amp; Battery Advice', 
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
      <nav className="bg-white shadow-sm pt-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex items-center h-14">
              <Link href="/" className="flex items-center h-full">
                <Image
                  src="/images/logo.png"
                  alt="ZeroTek Logo"
                  width={200}
                  height={56}
                  className="h-full w-auto object-contain"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-green-600 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-10">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <button 
                      className="text-gray-800 hover:text-green-600 px-3 py-1.5 rounded-md text-base font-semibold tracking-wide transition-colors duration-200 cursor-pointer"
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
                      style={{ 
                        top: 'calc(100% + 0.5rem)',
                        maxWidth: 'calc(100vw - 2rem)'
                      }}
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

            {/* Contact Us Button - Hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-4 py-1.5 rounded-md text-base font-semibold tracking-wide hover:bg-green-700 transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="pt-4 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-md"
                  >
                    {item.title}
                  </button>
                  {activeMenu === index && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-green-600 text-white px-6 py-2.5 rounded-md text-lg font-semibold tracking-wide hover:bg-green-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 