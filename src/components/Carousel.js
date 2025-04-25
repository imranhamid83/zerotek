'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    customPaging: function(i) {
      return (
        <div className="w-3 h-3 rounded-full bg-white/50 transition-all duration-300 hover:bg-white/80"></div>
      );
    },
    appendDots: dots => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
  };

  const slides = [
    {
      title: 'Welcome to ZeroTEK',
      subtitle: 'Your trusted partner for solar, battery, and electrical solutions',
      buttonText: 'Learn More',
      buttonLink: '/about/about-us',
      bgColor: 'bg-green-600',
    },
    {
      title: 'Get EV charger from £999 only',
      subtitle: 'supplied and fitted',
      buttonText: 'Get Quote',
      buttonLink: '/electrical/ev-charges',
      bgColor: 'bg-green-700',
    },
    {
      title: 'Ventilate your home',
      subtitle: 'We can provide you expert advice and a solution custom to your needs',
      buttonText: 'Learn More',
      buttonLink: '/ventilation',
      bgColor: 'bg-green-800',
    },
  ];

  if (!isClient) return null;

  return (
    <div className="relative">
      <style jsx global>{`
        .slick-dots {
          position: absolute;
          bottom: 2rem;
          display: flex !important;
          justify-content: center;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          z-index: 10;
        }
        .slick-dots li {
          margin: 0 0.5rem;
        }
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active div {
          background-color: white;
          transform: scale(1.2);
        }
      `}</style>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`${slide.bgColor} h-[400px] flex items-center justify-center`}>
            <div className="text-center max-w-3xl px-4 mx-auto mt-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90">
                {slide.subtitle}
              </p>
              <a
                href={slide.buttonLink}
                className="inline-block bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold transition-colors duration-200"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel; 