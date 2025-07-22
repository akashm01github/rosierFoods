import React from 'react';

import milking from '/images/milking.png';
import deshiGhee from '/images/deshiGhee.png';

const WelcomeSection = () => {
  const cards = [
    
    {
      title: "Feeding",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Milking",
      image: milking
    },
    {
      title: "Our Products",
      image: deshiGhee
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffdbd4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
            Rosier: 100% Pure, Modern, Caring Dairy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are proud to represent the next generation of excellence in dairy and farm-fresh products. 
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 bg-[#F5EFFF]">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                 At Rosier, we deliver pure, nutritious milk through modern milking, top hygiene, and animal care—ensuring farm-fresh quality in every drop.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div> */}
        {/* <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce"></div> */}
      </div>
    </div>
  );
};

export default WelcomeSection;