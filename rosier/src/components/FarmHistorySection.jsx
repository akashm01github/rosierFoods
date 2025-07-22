import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import deshiCow from '../../public/images/deshiCow2.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FarmHistorySection = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const iconRefs = useRef([]);

  // Sample icons (using Heroicons for demonstration)
  const icons = [
    {
      title: 'Modern Dairy',
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-12a4 4 0 00-4 4h2a2 2 0 014 0h2a4 4 0 00-4-4z" />
        </svg>
      ),
    },
    {
      title: 'Natural & Organic',
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3 15h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z" />
        </svg>
      ),
    },
    {
      title: 'Best Products',
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
    },
    {
      title: 'Awarded Farm',
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3 15l-3-3-3 3V7h6v10z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Animation for the left column (title and paragraph)
    gsap.fromTo(
      leftColumnRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animation for icon cards with stagger
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animation for the cow image
    gsap.fromTo(
      rightColumnRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#ffdbd4] bg-opacity-50 bg-[url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')] bg-repeat"
      aria-label="Know About Our Farm And History"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div ref={leftColumnRef} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
              WE CARE FOR OUR ANIMALS
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              For over 30 years, our farm has stood for sustainable, organic dairy farming. We prioritize animal welfare, protect the environment, and craft high-quality dairy with passion and purpose. Discover our story, our values, and our commitment to doing things the right way—for our animals and our community.
            </p>
            {/* Icon Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {icons.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div>{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div ref={rightColumnRef} className="flex justify-center lg:justify-end">
            <img
              src="https://www.rosierfoods.com/cdn/shop/files/cow_d18d9ba1-94eb-47ac-82ca-e1739e795860.png?v=1743061311&width=750"
              alt="Cow with transparent background"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmHistorySection;