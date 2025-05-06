'use client';

import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

const DMEV = () => {
  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Decentralized Mechanical Extract Ventilation (DMEV)</h1>
            <p className="text-lg text-gray-600 mb-8">
              DMEV systems provide localized ventilation solutions, perfect for properties where centralized systems are not practical 
              or where targeted ventilation is required.
            </p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How DMEV Works</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Individual units installed in specific rooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Self-contained ventilation solution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No need for ductwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Can be retrofitted into existing properties</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Flexible installation options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Ideal for retrofit projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Energy-efficient operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Easy maintenance and servicing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/dmev-Decentral-mechanical-extract-ventilation-fan-extractor.jpeg"
              alt="Decentralized Mechanical Extract Ventilation System"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DMEV; 