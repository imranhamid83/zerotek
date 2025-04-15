import PageTemplate from "@/components/PageTemplate";
import Image from 'next/image';

export default function OurProjects() {
  const projects = [
    {
      title: 'Residential Solar Installation',
      location: 'London, UK',
      description: 'Complete solar system installation for a family home',
      image: '/images/projects/residential-1.jpg',
      features: ['5kW Solar System', 'Battery Storage', 'Smart Monitoring']
    },
    {
      title: 'Commercial Solar Farm',
      location: 'Manchester, UK',
      description: 'Large-scale solar installation for a manufacturing facility',
      image: '/images/projects/commercial-1.jpg',
      features: ['100kW Solar Array', 'Grid Integration', 'Energy Management']
    },
    {
      title: 'EV Charging Hub',
      location: 'Birmingham, UK',
      description: 'Public EV charging station with multiple charging points',
      image: '/images/projects/ev-charging-1.jpg',
      features: ['10 Charging Points', 'Fast Charging', 'Payment System']
    }
  ];

  return (
    <PageTemplate title="Our Projects">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Explore our portfolio of successful projects that showcase our expertise in solar, battery, and electrical solutions. 
            Each project represents our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
} 