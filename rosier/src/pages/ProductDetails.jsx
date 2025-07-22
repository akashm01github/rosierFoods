import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../CartContext';
import { gsap } from 'gsap';

const dummyProducts = [
  {
    id: 1,
    name: 'Gir Cow A2 Ghee - Made From Curd',
    price: 1350,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork64.jpg?v=1749285565&width=823',
    category: 'A2Ghee',
  },
  {
    id: 2,
    name: 'Better Bars Orange & Cocoa',
    price: 290,
    img: 'https://www.rosierfoods.com/cdn/shop/files/4_Orange_Cocoa.jpg?v=1743769781&width=823',
    category: 'Better Bars',
  },
  {
    id: 3,
    name: 'Wild Forest Honey',
    price: 300,
    img: 'https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344&width=823',
    category: 'Raw Honey',
  },
  {
    id: 4,
    name: 'Stone Pressed Black Mustard Oil',
    price: 390,
    img: 'https://www.rosierfoods.com/cdn/shop/files/1_0c7c1229-8654-45da-b61c-67bbeec4290d.jpg?v=1746730312&width=823',
    category: 'Oils',
  },
  {
    id: 5,
    name: 'Khapli (Emmer) Wheat Atta',
    price: 469,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042&width=823',
    category: 'Grains',
  },
  {
    id: 6,
    name: 'Nut Butter Dark Chocolate',
    price: 430,
    img: 'https://www.rosierfoods.com/cdn/shop/files/dark_choco_front_65d098de-da74-46fe-8524-d15caa20a2bf.jpg?v=1743062114&width=823',
    category: 'NutButter',
  },
  {
    id: 7,
    name: 'Almond Butter Crunchy',
    price: 565,
    img: 'https://www.rosierfoods.com/cdn/shop/files/almondfront.jpg?v=1743060338&width=713',
    category: 'NutButter',
  },
  {
    id: 8,
    name: 'Crunchy Almond Butter & Dark Chocolate Nut Butter Combo',
    price: 945,
    img: 'https://www.rosierfoods.com/cdn/shop/files/IMG-1795.jpg?v=1743060382&width=713',
    category: 'NutButter',
  },
  {
    id: 9,
    name: 'Nut Butter',
    price: 390,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Front.jpg?v=1743060301&width=713',
    category: 'NutButter',
  },
  {
    id: 10,
    name: 'Wild Forest Honey (Pack of 2)',
    price: 1059,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Packof2Honey.jpg?v=1746535919&width=713',
    category: 'Raw Honey',
  },
  {
    id: 11,
    name: 'Better Bars Cocoa & Almond',
    price: 290,
    img: 'https://www.rosierfoods.com/cdn/shop/files/1_Cocoa_Almond.jpg?v=1743769781&width=713',
    category: 'Better Bars',
  },
  {
    id: 12,
    name: 'Better Bars Berry & Coconut',
    price: 290,
    img: 'https://www.rosierfoods.com/cdn/shop/files/7_Berry_Coconut.jpg?v=1743769781&width=713',
    category: 'Better Bars',
  },
  {
    id: 13,
    name: 'Stone Pressed Black Mustard Oil 5 Ltr',
    price: 1799,
    img: 'https://www.rosierfoods.com/cdn/shop/files/215E4D0A-62D5-4B25-8B4B-AB35582AB5B4.jpg?v=1750845571&width=713',
    category: 'Oils',
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const productRefs = useRef([]);
  const containerRef = useRef(null);
  const selectRef = useRef(null);

  // Extract unique categories from dummyProducts
  const categories = ['All', ...new Set(dummyProducts.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? dummyProducts
      : dummyProducts.filter((product) => product.category === selectedCategory);

  // Animate product cards and container on mount and category change
  useEffect(() => {
    // Container background fade-in
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // Product cards entrance with bounce
    gsap.fromTo(
      productRefs.current,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      }
    );

    // Animate dropdown
    gsap.fromTo(
      selectRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [filteredProducts]);

  // Handle card hover animations
  const handleCardHover = (index, enter) => {
    gsap.to(productRefs.current[index], {
      scale: enter ? 1.03 : 1,
      rotateY: enter ? 5 : 0,
      rotateX: enter ? 5 : 0,
      boxShadow: enter ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Handle button hover animations
  const handleButtonHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.1 : 1,
      backgroundColor: enter ? '#2563eb' : '#3b82f6',
      boxShadow: enter ? '0 5px 15px rgba(0,0,0,0.3)' : 'none',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  // Handle image load animation
  const handleImageLoad = (index) => {
    gsap.fromTo(
      productRefs.current[index].querySelector('img'),
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  };

  // Handle category change with grid animation
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    gsap.to(containerRef.current, {
      opacity: 0.3,
      scale: 0.98,
      duration: 0.3,
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      },
    });
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-white"
      ref={containerRef}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Our Products</h1>
        <div className="relative">
          <select
            ref={selectRef}
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border-2 border-blue-500 rounded-lg px-4 py-2 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-blue-50"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transform transition-all"
            ref={(el) => (productRefs.current[index] = el)}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
          >
            <div className="relative w-full pt-[100%]">
              <img
                src={product.img}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h2>
              <p className="text-gray-600 mb-4 text-lg">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
                className="mt-auto bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;