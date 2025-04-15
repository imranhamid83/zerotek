import PageTemplate from "@/components/PageTemplate";

export default function Careers() {
  const positions = [
    {
      title: 'Solar Installation Engineer',
      type: 'Full-time',
      location: 'London',
      description: 'Join our team of expert solar installers and help bring clean energy to homes and businesses.'
    },
    {
      title: 'Electrical Engineer',
      type: 'Full-time',
      location: 'Manchester',
      description: 'Design and implement electrical systems for our solar and EV charging projects.'
    },
    {
      title: 'Project Manager',
      type: 'Full-time',
      location: 'Birmingham',
      description: 'Lead our solar and electrical projects from conception to completion.'
    },
    {
      title: 'Customer Support Specialist',
      type: 'Full-time',
      location: 'Remote',
      description: 'Provide exceptional support to our customers and help them with their energy needs.'
    }
  ];

  return (
    <PageTemplate title="Careers at ZeroTek">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Join our team of passionate professionals dedicated to making sustainable energy 
            accessible to everyone. At ZeroTek, we offer exciting career opportunities in 
            a growing industry that's shaping the future of energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Why Work With Us?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Competitive salary and benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Professional development opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Work on cutting-edge technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Make a positive environmental impact</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Culture</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Innovative and forward-thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Collaborative work environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Commitment to sustainability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Focus on work-life balance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Current Openings</h3>
          <div className="grid grid-cols-1 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">{position.title}</h4>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span className="mr-4">{position.type}</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mt-4">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 