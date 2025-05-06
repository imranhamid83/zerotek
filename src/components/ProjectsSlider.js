'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      title: "Residential Solar Installation",
      description: "5kW solar system with battery storage for a family home in London",
      image: "/images/cmev-Central-Mechanical-Extract-Ventilation-pipe-device.jpeg",
      location: "London, UK",
      href: "/about/our-projects"
    },
    {
      title: "Commercial Solar Farm",
      description: "100kW solar array installation for a manufacturing facility",
      image: "/images/cmev-Central-Mechanical-Extract-Ventilation-pipes-project-work.jpeg",
      location: "Manchester, UK",
      href: "/about/our-projects"
    },
    {
      title: "EV Charging Hub",
      description: "Installation of 10 charging points with smart management system",
      image: "/images/cmev-Central-Mechanical-Extract-Ventilation-pipes.jpeg",
      location: "Birmingham, UK",
      href: "/about/our-projects"
    },
    {
      title: "Industrial Ventilation System",
      description: "Advanced ventilation solution for a large warehouse facility",
      image: "/images/electrical-ZeroTek-Consumer-unit.jpeg",
      location: "Leeds, UK",
      href: "/about/our-projects"
    },
    {
      title: "Battery Storage Facility",
      description: "Large-scale battery storage system for grid stability",
      image: "/images/electrical-ZeroTek-electric-wiring.jpeg",
      location: "Glasgow, UK",
      href: "/about/our-projects"
    },
    {
      title: "Smart Home Integration",
      description: "Complete smart home solution with solar and battery backup",
      image: "/images/cmev-CMEV-installation-pipe.jpeg",
      location: "Bristol, UK",
      href: "/about/our-projects"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % (projects.length - 2));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + (projects.length - 2)) % (projects.length - 2));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium">{project.location}</span>
                    <Link
                      href={project.href}
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      View Project &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(projects.length - 2)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlider; 