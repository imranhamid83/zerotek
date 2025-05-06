'use client';

import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

const DomesticServices = () => {
  const services = [
    {
      title: 'Consumer Unit Upgrades',
      description: 'Modern, safe, and compliant consumer unit installations to protect your home and family.',
      features: [
        'RCD protection installation',
        'Circuit breaker upgrades',
        'Surge protection devices',
        'Compliance with latest regulations'
      ],
      image: '/images/electrical-ZeroTek-Consumer-unit.jpeg'
    },
    {
      title: 'Lighting Solutions',
      description: 'Professional lighting installations and upgrades for your home.',
      features: [
        'LED lighting installations',
        'Smart lighting systems',
        'Outdoor lighting',
        'Emergency lighting'
      ],
      image: '/images/electrical-lighting-solutions-zerotek.jpg'
    },
    {
      title: 'Socket & Switch Installations',
      description: 'Safe and reliable power solutions throughout your home.',
      features: [
        'Additional power points',
        'USB charging sockets',
        'Smart switches',
        'Safety socket covers'
      ],
      image: '/images/electrical-ZeroTek-electric-wiring.jpeg'
    },
    {
      title: 'Rewiring Services',
      description: 'Complete home rewiring to ensure safety and modern standards.',
      features: [
        'Full property rewiring',
        'Partial rewiring',
        'Period property rewiring',
        'Safety inspections'
      ],
      image: '/images/mvhr/Mechanical-Ventilation-Heat-Recovery-cabling.jpeg'
    },
    {
      title: 'Electrical Safety Inspections',
      description: 'Comprehensive electrical safety checks for your peace of mind.',
      features: [
        'EICR testing',
        'Landlord safety certificates',
        'Homebuyer reports',
        'Periodic inspections'
      ],
      image: '/images/electrical-ZeroTek-EICR-testing.jpg'
    },
    {
      title: 'Smart Home Integration',
      description: 'Modern smart home solutions to enhance your living experience.',
      features: [
        'Smart lighting control',
        'Home automation systems',
        'Security system integration',
        'Energy monitoring'
      ],
      image: '/images/electrical-smarthome-hero-zerotek.jpg'
    }
  ];

  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Domestic Electrical Services</h1>
          <p className="text-xl text-gray-600">
            Professional electrical services for your home, ensuring safety, efficiency, and modern solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default DomesticServices; 