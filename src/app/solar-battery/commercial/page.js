import PageTemplate from "@/components/PageTemplate";

export default function CommercialSolar() {
  return (
    <PageTemplate title="Commercial Solar Solutions">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Power your business with our enterprise-grade solar solutions. 
            We specialize in designing and implementing solar systems that maximize ROI and sustainability for commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Benefits for Your Business</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Significant cost savings on energy bills</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Enhanced corporate sustainability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Improved brand reputation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Tax incentives and rebates</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Commercial Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Large-scale solar installations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Energy management systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Commercial battery storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Performance monitoring</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Commercial Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">1</div>
              <div className="text-gray-600">Site Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">2</div>
              <div className="text-gray-600">Custom Design</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">3</div>
              <div className="text-gray-600">Installation</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">4</div>
              <div className="text-gray-600">Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 