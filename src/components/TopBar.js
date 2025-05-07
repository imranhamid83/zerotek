'use client';

import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
          <a href="tel:01494314971" className="hover:text-green-400 transition-colors duration-200">
              <span className="hidden sm:inline">Phone: </span>01494 314 971
            </a>
            
          </div>
          <div className="flex items-center space-x-6 text-sm">         
            <a href="mailto:info@zerotek.com" className="hover:text-green-400 transition-colors duration-200">
              <span className="hidden sm:inline">Email: </span>hello@zero-tek.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 