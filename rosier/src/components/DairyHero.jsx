import React from 'react';

const DairyHero = () => {
  return (
    <div
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/20"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white relative z-10 font-bold text-center px-4">
        Milking Land of Milk & Honey
      </h1>

      {/* Paragraph */}
      <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl text-white relative z-10 text-center px-4">
        Dairy producers worldwide face similar challenges around animal welfare, farm profitability, food safety, and work efficiency. Discover how our customers are solving these challenges. Also known as the land of milk and honey for its rich and vibrant farming tradition.
      </p>
    </div>
  );
};

export default DairyHero;