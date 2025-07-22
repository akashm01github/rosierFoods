import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProductCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const gsapContext = useRef(null);

  // Custom SVG Icons (unchanged)
  const ChevronLeft = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronRight = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ShoppingCart = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 22c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM20 22c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM1 1h4l2.7 13.4c.2 1 1.1 1.7 2.1 1.6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Sample product data (unchanged)
  const products = [
    {
      id: 1,
      image: "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork61.jpg?v=1749285565&width=713",
      title: "Gir Cow A2 ghee - Made From Curd",
      priceRange: "₹ 1,350.00"
    },
    {
      id: 2,
      image: "https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344&width=713",
      title: "Wild Forest Honey",
      priceRange: "₹ 555.00"
    },
    {
      id: 3,
      image: "https://www.rosierfoods.com/cdn/shop/files/1_0c7c1229-8654-45da-b61c-67bbeec4290d.jpg?v=1746730312&width=713",
      title: "Stone Pressed Black Mustard Oil",
      priceRange: "₹ 390.00"
    },
    {
      id: 4,
      image: "https://www.rosierfoods.com/cdn/shop/files/BakhoorCupFront.jpg?v=1743151438&width=713",
      title: "Rosier Havan Cups – Bakhoor",
      priceRange: "₹ 390.00"
    },
    {
      id: 5,
      image: "https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042&width=713",
      title: "Khapli (Emmer) Wheat Atta",
      priceRange: "₹ 469.00"
    },
    {
      id: 6,
      image: "https://www.rosierfoods.com/cdn/shop/files/Nut_butter_C_front.jpg?v=1743060240&width=713",
      title: "Nut Butter Crunchy",
      priceRange: "₹ 390.00"
    },
    {
      id: 7,
      image: "https://www.rosierfoods.com/cdn/shop/files/7_Berry_Coconut.jpg?v=1743769781&width=713",
      title: "Better Bars Berry & Coconut",
      priceRange: "₹ 390.00"
    },
    {
      id: 8,
      image: "https://www.rosierfoods.com/cdn/shop/files/front_9f7d958e-d835-4d2b-b6b1-f51398e7d410.jpg?v=1743061103&width=713",
      title: "Prajna Blue Lotus Dhoop Incense Sticks",
      priceRange: "₹ 290.00"
    }
  ];

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      if (window.innerWidth < 1280) return 3;
      return 4;
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const maxIndex = Math.max(0, products.length - cardsPerView);

  // Handle window resize with debouncing
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCardsPerView(getCardsPerView());
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!sliderRef.current || !cardsRef.current.length) return;

    // Create GSAP context for safe cleanup
    gsapContext.current = gsap.context(() => {
      // Animate slider
      gsap.to(sliderRef.current, {
        x: `-${currentIndex * (100 / cardsPerView)}%`,
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Animate visible cards
      const visibleCards = cardsRef.current.slice(
        currentIndex,
        currentIndex + cardsPerView
      ).filter(Boolean);

      if (visibleCards.length) {
        gsap.fromTo(
          visibleCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Animate dots
      if (dotsRef.current.length) {
        gsap.to(dotsRef.current, {
          scale: (index) => (index === currentIndex ? 1.2 : 1),
          backgroundColor: (index) =>
            index === currentIndex ? '#2563eb' : '#d1d5db',
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }, sliderRef.current);

    return () => {
      gsapContext.current && gsapContext.current.revert();
    };
  }, [currentIndex, cardsPerView]);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const ProductCard = ({ product, index }) => (
    <div
      ref={(el) => (cardsRef.current[index] = el)}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col"
      style={{ minHeight: '360px' }}
    >
      <div className="relative overflow-hidden aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ShoppingCart size={16} className="text-gray-600" />
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
          {product.title}
        </h3>
        <p className="text-blue-600 font-bold text-lg sm:text-xl mb-4">
          {product.priceRange}
        </p>
        <div className="mt-auto">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Featured Products
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex"
          style={{ transform: `translateX(0)` }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 px-1 sm:px-2"
              style={{ width: `calc(${100 / cardsPerView}% - ${cardsPerView === 1 ? '0.5rem' : '1rem'})` }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {products.length > cardsPerView && (
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                ref={(el) => (dotsRef.current[index] = el)}
                onClick={() => setCurrentIndex(index)}
                className={`dot w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      )}

      {/* Progress Bar */}
      {products.length > cardsPerView && (
        <div className="mt-6 max-w-md mx-auto">
          <div className="bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardSlider;