'use client';

import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

const Maintenance = () => {
  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Solar System Maintenance</h1>
            <p className="text-lg text-gray-600 mb-8">
              Keep your solar system operating at peak performance with our comprehensive maintenance services. Our expert 
              technicians ensure your investment continues to deliver maximum returns through regular inspections and professional care.
            </p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Maintenance Services</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Regular system performance checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Panel cleaning and inspection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Inverter and battery maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Emergency repair services</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Maximize system efficiency and output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Extend system lifespan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Prevent costly repairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Peace of mind with professional care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/solar/maintenance.jpg"
              alt="Solar System Maintenance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Maintenance; 