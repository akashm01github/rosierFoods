import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
  // Refs for GSAP animations
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Animate Left Column (History Section)
      gsap.fromTo(
        leftColumnRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate Image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate Right Column (Mission Sections)
      gsap.fromTo(
        rightColumnRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - About our History */}
        <div ref={leftColumnRef} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
              About Our History
            </h2>
            <h3 className="text-lg font-sans text-gray-700 font-medium">
              A Legacy of Sustainable Farming
            </h3>
            <p className="text-gray-600 font-sans leading-relaxed text-base sm:text-lg">
              Founded in 1952, our family farm has been committed to sustainable agriculture practices for over seven decades. What started as a small dairy operation with just twelve cows has grown into a thriving agricultural community that prioritizes animal welfare, environmental stewardship, and quality produce. Through three generations of farmers, we've maintained our core values while embracing innovative farming techniques that benefit both our livestock and the land we call home.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              ref={imageRef}
              src="https://www.rosierfoods.com/cdn/shop/files/78d4352e-c58a-4169-956d-bc09beaec595.jpg?v=1743061791&width=750"
              alt="Woman feeding cows in a pastoral field"
              className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Column - Mission Sections */}
        <div ref={rightColumnRef} className="space-y-10">
          {/* First Mission Section */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base sm:text-lg">

                
              We are dedicated to producing the highest quality dairy products while maintaining the health and happiness of our animals. Our mission extends beyond farming to include education about sustainable agriculture practices and fostering a deeper connection between our community and the food they consume. We believe that responsible farming creates a positive impact that reaches far beyond our farm gates.

              
            </p>
          </div>

          {/* Second Mission Section (Renamed to Our Commitment) */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
              We are Proudly and Passionately Obsessed with Everything Organic!
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base sm:text-lg">
              In our daily life routine, we sometimes forget to take stock of what we are eating and how we are eating. The choices we make with respect to food which affects us and our entire family. So, we must consciously invest energy in finding right kinds of foods for us and our family to help build their immunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}