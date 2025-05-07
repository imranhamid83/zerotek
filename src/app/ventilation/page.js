import Link from 'next/link';

export default function Ventilation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ventilation Solutions</h1>
            <p className="text-xl md:text-2xl">Breathe Easy with Our Advanced Ventilation Systems</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* MVHR Systems Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">MVHR Systems</h2>
            <p className="text-lg text-gray-600 mb-6">
              Mechanical Ventilation with Heat Recovery (MVHR) systems provide fresh, filtered air while recovering heat from outgoing stale air. Our systems are designed to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Improve indoor air quality</li>
              <li>Reduce energy costs</li>
              <li>Maintain comfortable temperatures</li>
              <li>Prevent condensation and mold</li>
            </ul>
            <Link href="/ventilation/mvhr" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Learn More About MVHR
            </Link>
          </div>
        </section>

        {/* CMEV Systems Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Continuous Mechanical Extract Ventilation (CMEV)</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our CMEV systems provide continuous, low-level ventilation throughout your home, ensuring a constant supply of fresh air. Key features include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Continuous air extraction</li>
              <li>Low energy consumption</li>
              <li>Quiet operation</li>
              <li>Automatic humidity control</li>
            </ul>
            <Link href="/ventilation/cmev" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Learn More About CMEV
            </Link>
          </div>
        </section>

        {/* DMEV Systems Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Decentralized Mechanical Extract Ventilation (DMEV)</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our DMEV systems offer flexible, room-by-room ventilation control, perfect for retrofitting existing properties. Benefits include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Individual room control</li>
              <li>Easy installation</li>
              <li>Minimal disruption</li>
              <li>Cost-effective solution</li>
            </ul>
            <Link href="/ventilation/dmev" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Explore DMEV Solutions
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Ventilation Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and maintenance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Premium products with comprehensive warranties</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Improve Your Indoor Air Quality?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our ventilation solutions can transform your living space.
          </p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-700 transition-colors">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
} 