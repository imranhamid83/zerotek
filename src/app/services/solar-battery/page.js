'use client';

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function SolarBatteryServices() {
  const services = [
    {
      title: "Residential Solar Solutions",
      description: "Custom solar panel installations for your home, designed to maximize energy production and savings.",
      image: "/images/residential-solar.jpg",
      features: [
        "Custom system design",
        "High-efficiency panels",
        "Battery storage options",
        "Smart monitoring systems"
      ]
    },
    {
      title: "Commercial Solar Solutions",
      description: "Enterprise-grade solar systems for businesses, reducing operational costs and carbon footprint.",
      image: "/images/commercial-solar.jpg",
      features: [
        "Large-scale installations",
        "Energy management systems",
        "ROI optimization",
        "Maintenance packages"
      ]
    },
    {
      title: "Battery Storage Systems",
      description: "Advanced battery solutions to store excess solar energy and ensure uninterrupted power supply.",
      image: "/images/battery-storage.jpg",
      features: [
        "Lithium-ion technology",
        "Smart energy management",
        "Backup power solutions",
        "Grid independence"
      ]
    }
  ];

  return (
    <PageTemplate title="Solar & Battery Services">
      <div className="space-y-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Discover our comprehensive range of solar and battery solutions, designed to meet your 
            energy needs while reducing your environmental impact. From residential installations to 
            commercial projects, we provide end-to-end services with the latest technology.
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