'use client';

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function ElectricalServices() {
  const services = [
    {
      title: "EV Charging Solutions",
      description: "Professional installation of EV charging stations for homes and businesses, supporting the transition to electric vehicles.",
      image: "/images/ev-charging.jpg",
      features: [
        "Home charging stations",
        "Commercial charging hubs",
        "Smart charging systems",
        "Installation and maintenance"
      ]
    },
    {
      title: "Ventilation Systems",
      description: "Advanced ventilation solutions to improve indoor air quality and energy efficiency in your property.",
      image: "/images/ventilation.jpg",
      features: [
        "Mechanical ventilation",
        "Heat recovery systems",
        "Air quality monitoring",
        "Energy-efficient solutions"
      ]
    },
    {
      title: "Electrical Installations",
      description: "Comprehensive electrical services for residential and commercial properties, ensuring safety and efficiency.",
      image: "/images/electrical-installation.jpg",
      features: [
        "Wiring and rewiring",
        "Panel upgrades",
        "Safety inspections",
        "Emergency services"
      ]
    }
  ];

  return (
    <PageTemplate title="Electrical Services">
      <div className="space-y-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Our expert electrical services cover everything from EV charging installations to 
            advanced ventilation systems. We provide reliable, efficient, and safe solutions 
            for both residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
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