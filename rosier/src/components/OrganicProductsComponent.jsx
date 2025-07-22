import React from 'react';

export default function OrganicProductsComponent() {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Top Section - Natural & Organic Products */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Woman with cows in natural farm setting"
                className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-amber-900 mb-6 leading-tight">
              Natural & Organic Products
            </h1>
            <p className="text-lg text-amber-800 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover the pure essence of farm-fresh goodness with our carefully curated collection 
              of natural and organic products. From pasture-raised dairy to seasonal produce, 
              every item is thoughtfully sourced from local farms committed to sustainable practices 
              and exceptional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section - Featured Recipe */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork60.jpg?v=1749285565&width=713" 
                alt="Delicious organic dessert with fresh berries"
                className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-amber-900 mb-6 leading-tight">
              Featured Recipe
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Indulge in our signature organic berry parfait, crafted with layers of creamy 
              farm-fresh yogurt, locally sourced honey, and seasonal berries bursting with 
              natural sweetness. This wholesome dessert celebrates the perfect harmony of 
              simple ingredients transformed into something truly extraordinary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}