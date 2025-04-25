'use client';

import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

const IEV = () => {
  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Intermittent Extract Ventilation (IEV)</h1>
            <p className="text-lg text-gray-600 mb-8">
              Intermittent Extract Ventilation systems provide effective air extraction for specific areas of your property, 
              operating on demand to remove moisture, odors, and pollutants.
            </p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How IEV Works</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Operates when needed, typically controlled by humidity sensors or manual switches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Extracts air from specific areas like bathrooms and kitchens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Prevents condensation and mold growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Energy-efficient operation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Cost-effective solution for targeted ventilation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Simple installation and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Reduces energy consumption compared to continuous systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Improves indoor air quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/ventilation/iev.jpg"
              alt="Intermittent Extract Ventilation System"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default IEV; 