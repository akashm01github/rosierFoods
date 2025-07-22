import React, { useState, useEffect } from 'react';
import honeyBanner from '/images/honeyBanner.jpg';
import gheeBanner from '/images/gheeBanner.jpg';

const ImageSlider = () => {
  const images = [
    {
      url: gheeBanner,
      alt: 'Ghee product',
      title: 'Authentic Ghee Magic',
      description: 'Experience the rich taste of natural ghee',
    },
    {
      url: honeyBanner,
      alt: 'Honey product',
      title: 'Sweet Honey Delight',
      description: 'Pure, natural honey from the wild',
    },
    {
      url: honeyBanner,
      alt: 'Honey product',
      title: 'Golden Honey Glow',
      description: 'Nature’s finest sweetener',
    },
    {
      url: gheeBanner,
      alt: 'Ghee product',
      title: 'Authentic Ghee Magic',
      description: 'Crafted with tradition and care',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // Minimum swipe distance

    if (isSwipe) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[600px] overflow-hidden"
      role="region"
      aria-label="Image slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            role="group"
            aria-label={`Slide ${index + 1}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

            {/* Content overlay */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white max-w-[90%] sm:max-w-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 opacity-90">
                {image.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-80 mb-4 md:mb-6">
                {image.description}
              </p>
              <button
                className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300"
                aria-label="Explore now"
              >
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-colors duration-300 text-lg sm:text-xl md:text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-colors duration-300 text-lg sm:text-xl md:text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 sm:top-6 right-2 sm:right-4 md:right-6 bg-white/30 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transition-colors duration-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
        aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 sm:top-6 left-2 sm:left-4 md:left-6 bg-black/30 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;