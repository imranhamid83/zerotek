'use client';

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function ExpertAdvice() {
  const resources = [
    {
      title: "Solar & Battery Guides",
      description: "Comprehensive guides on solar panel systems, battery storage, and renewable energy solutions.",
      image: "/images/solar-guide.jpg",
      features: [
        "System selection guide",
        "Installation process",
        "Maintenance tips",
        "Energy savings calculator"
      ]
    },
    {
      title: "Electrical Safety",
      description: "Essential information about electrical safety, system maintenance, and best practices.",
      image: "/images/electrical-safety.jpg",
      features: [
        "Safety guidelines",
        "System maintenance",
        "Troubleshooting tips",
        "Emergency procedures"
      ]
    },
    {
      title: "Energy Efficiency",
      description: "Expert advice on improving energy efficiency in your home or business.",
      image: "/images/energy-efficiency.jpg",
      features: [
        "Energy audits",
        "Efficiency improvements",
        "Cost-saving tips",
        "Smart home integration"
      ]
    }
  ];

  return (
    <PageTemplate title="Expert Advice">
      <div className="space-y-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Access our comprehensive collection of guides, tips, and expert advice to help you 
            make informed decisions about your energy needs. From solar installations to electrical 
            safety, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {resource.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
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