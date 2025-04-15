import PageTemplate from "@/components/PageTemplate";

export default function ResidentialSolar() {
  return (
    <PageTemplate title="Residential Solar Solutions">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Transform your home with our comprehensive residential solar solutions. 
            We provide customized systems designed to maximize your energy savings and reduce your carbon footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Why Choose Solar for Your Home?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Reduce your electricity bills by up to 70%</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Increase your property value</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Protect against rising energy costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Reduce your carbon footprint</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Residential Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Custom solar system design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Professional installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Battery storage solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Maintenance and monitoring</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">1</div>
              <div className="text-gray-600">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">2</div>
              <div className="text-gray-600">System Design</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">3</div>
              <div className="text-gray-600">Installation</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">4</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 