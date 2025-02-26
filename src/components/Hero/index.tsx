/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slides = [
    {
      title: "Innovation & Excellence",
      description: "Leader en génie et technologie depuis plus de 150 ans",
      buttonText: "Découvrir notre histoire",
      buttonLink: "/histoire",
      image: "/banner.png", // Placez vos images dans public/images/hero/
    },
    {
      title: "Recherche de Pointe",
      description: "Des équipements à la fine pointe de la technologie",
      buttonText: "Nos laboratoires",
      buttonLink: "/laboratoires",
      image: "/banner1.png",
    },
    {
      title: "Communauté Dynamique",
      description: "Un environnement stimulant pour les futurs ingénieurs",
      buttonText: "Rejoignez-nous",
      buttonLink: "/carrieres",
      image: "/banner.png",
    },
  ];

  useEffect(() => {
    let timer;
    if (isAutoplay) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
        );
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoplay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative z-10 h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transform transition-all duration-700 ease-in-out 
            ${currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Contenu */}
          <div className="container relative h-full px-4 mx-auto">
            <div className="flex items-center h-full">
              <div className="w-full max-w-[600px] text-white">
                <h1 className="mb-6 text-5xl font-bold leading-tight animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="mb-8 text-xl delay-200 animate-fadeIn opacity-90">
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="inline-block px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg animate-fadeIn delay-400 bg-primary hover:scale-105 hover:bg-primary/80"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Contrôles de navigation */}
      <div className="absolute flex items-center gap-6 -translate-x-1/2 bottom-8 left-1/2">
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className={`rounded-full p-2 ${isAutoplay ? "bg-primary" : "bg-gray-600"} 
            transition-colors hover:bg-primary/80`}
        >
          {isAutoplay ? (
            <span className="px-2 text-sm text-white">Auto ⏸</span>
          ) : (
            <span className="px-2 text-sm text-white">Auto ▶</span>
          )}
        </button>

        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 
                ${currentSlide === index ? "w-8 bg-primary" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Flèches de navigation
      <button
        onClick={prevSlide}
        className="absolute p-2 text-white transition-colors -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30 hover:bg-primary"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 text-white transition-colors -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30 hover:bg-primary"
      >
        →
      </button> */}
    </section>
  );
};

export default Hero;
