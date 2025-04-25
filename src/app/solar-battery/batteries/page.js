'use client';

import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

const Batteries = () => {
  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Battery Storage Solutions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Maximize your solar investment with our advanced battery storage systems. Store excess solar energy during the day 
              and use it when you need it most, ensuring uninterrupted power supply and greater energy independence.
            </p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Battery Services</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Lithium-ion battery installation and integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Hybrid solar and battery systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Backup power solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Smart energy management systems</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Store excess solar energy for later use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Reduce reliance on the grid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Power backup during outages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Optimize energy usage and costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/solar/batteries.jpg"
              alt="Battery Storage System"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Batteries; 