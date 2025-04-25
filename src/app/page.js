'use client';

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import Link from "next/link";
import ProjectsSlider from "@/components/ProjectsSlider";
import Carousel from '@/components/Carousel';

export default function Home() {
  const services = [
    {
      title: "Solar & Battery",
      description: "Professional solar and battery solutions for your home or business.",
      image: "/images/solar-panels.jpg",
      href: "/services/solar-battery"
    },
    {
      title: "Electrical Services",
      description: "Expert electrical installations and maintenance services.",
      image: "/images/electrical-panels.jpg",
      href: "/services/electrical"
    },
    {
      title: "Mechanical Ventilation with Heat Recovery (MVHR)",
      description: "MVHR systems provide whole-house ventilation while recovering heat from extracted air...",
      image: "/images/mvhr.jpg",
      href: "/ventilation/mvhr"
    }
  ];

  const partners = [
    { name: "SolarEdge", logo: "/images/partners/solaredge.png" },
    { name: "Tesla", logo: "/images/partners/tesla.png" },
    { name: "SMA", logo: "/images/partners/sma.png" },
    { name: "Fronius", logo: "/images/partners/fronius.png" },
    { name: "LG", logo: "/images/partners/lg.png" },
    { name: "Sonnen", logo: "/images/partners/sonnen.png" }
  ];

  return (
    <>
      <Carousel />
      <PageTemplate>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full transform transition-transform duration-200 group-hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Featured Projects</h2>
          <ProjectsSlider />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
