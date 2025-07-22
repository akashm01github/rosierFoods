import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import girCow from '/images/gircow.png';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function FarmAboutSection() {
  const features = [
    {
      icon: <i className="ri-map-pin-2-fill w-8 h-8 text-green-600"></i>,
      title: "Modern Dairy",
      description: "State-of-the-art facilities"
    },
    {
      icon: <i className="ri-leaf-fill w-8 h-8 text-green-600"></i>,
      title: "Natural & Organic",
      description: "100% organic farming practices"
    },
    {
      icon: <i className="ri-star-fill w-8 h-8 text-green-600"></i>,
      title: "Best Products",
      description: "Premium quality guaranteed"
    },
    {
      icon: <i className="ri-award-fill w-8 h-8 text-green-600"></i>,
      title: "Awarded Farm",
      description: "Industry recognized excellence"
    }
  ];

  useEffect(() => {
    // Animate Title and Description
    gsap.from('.title-section', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.title-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Animate Features Grid with Stagger
    gsap.from('.feature-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // Animate Cow Image
    gsap.from('.cow-image', {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.cow-image',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="title-section">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Know About Our Farm And History
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              For over three generations, our family farm has been committed to sustainable agriculture 
              and the highest standards of animal welfare. We believe in traditional farming methods 
              combined with modern technology to produce the finest dairy products while maintaining 
              our connection to the land and community that has supported us for decades.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item flex items-start space-x-4 group">
                <div className="flex-shrink-0 p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-200">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Cow Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Cow Image */}
            <div className="relative z-10 w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
              <img 
                src={girCow}
                className="cow-image w-full h-full object-contain drop-shadow-lg"
                alt="Gir Cow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}