'use client';

import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

const SolarPanels = () => {
  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Solar Panel Solutions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Harness the power of the sun with our high-quality solar panel systems. Our expert team designs and installs 
              efficient solar solutions tailored to your energy needs, helping you reduce your carbon footprint and energy bills.
            </p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Solar Panel Services</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Custom solar panel system design and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>High-efficiency monocrystalline and polycrystalline panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Grid-tied and off-grid solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Professional site assessment and energy analysis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Significant reduction in electricity bills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Environmentally friendly energy production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Increased property value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Government incentives and tax benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/solar/solar-panels.jpg"
              alt="Solar Panel Installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SolarPanels; 