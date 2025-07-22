import React from 'react';

const AboutUsHero = () => {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              About Us
            </h1>
            
            {/* Breadcrumb */}
            
          </div>
        </div>
      </div>
      
      {/* Optional: Subtle Animation */}
      <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export default AboutUsHero;