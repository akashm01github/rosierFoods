import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../CartContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dummyProducts = [
  {
    id: 1,
    name: 'Gir Cow A2 Ghee - Made From Curd',
    price: 1350,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork64.jpg?v=1749285565&width=823',
    category: 'A2Ghee',
    description: 'Pure A2 ghee made from curd using traditional methods, sourced from Gir cows. Rich in flavor and packed with nutrients, perfect for cooking and wellness.'
  },
  {
    id: 2,
    name: 'Better Bars Orange & Cocoa',
    price: 290,
    img: 'https://www.rosierfoods.com/cdn/shop/files/4_Orange_Cocoa.jpg?v=1743769781&width=823',
    category: 'Better Bars',
    description: 'A delightful blend of zesty orange and rich cocoa in a wholesome energy bar. Perfect for a quick, healthy snack on the go.'
  },
  {
    id: 3,
    name: 'Wild Forest Honey',
    price: 300,
    img: 'https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344&width=823',
    category: 'Raw Honey',
    description: '100% pure, raw honey harvested from wild forests. Naturally sweet and loaded with antioxidants, ideal for daily use.'
  },
  {
    id: 4,
    name: 'Stone Pressed Black Mustard Oil',
    price: 390,
    img: 'https://www.rosierfoods.com/cdn/shop/files/1_0c7c1229-8654-45da-b61c-67bbeec4290d.jpg?v=1746730312&width=823',
    category: 'Oils',
    description: 'Cold-pressed black mustard oil, extracted using traditional stone-pressing techniques. Adds a bold, pungent flavor to your dishes.'
  },
  {
    id: 5,
    name: 'Khapli (Emmer) Wheat Atta',
    price: 469,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042&width=823',
    category: 'Grains',
    description: 'Nutritious Khapli wheat atta, stone-ground for maximum freshness and flavor. Ideal for healthy rotis and baked goods.'
  },
  {
    id: 6,
    name: 'Nut Butter Dark Chocolate',
    price: 430,
    img: 'https://www.rosierfoods.com/cdn/shop/files/dark_choco_front_65d098de-da74-46fe-8524-d15caa20a2bf.jpg?v=1743062114&width=823',
    category: 'NutButter',
    description: 'Creamy nut butter blended with rich dark chocolate. A guilt-free indulgence perfect for spreading or snacking.'
  },
  {
    id: 7,
    name: 'Almond Butter Crunchy',
    price: 565,
    img: 'https://www.rosierfoods.com/cdn/shop/files/almondfront.jpg?v=1743060338&width=713',
    category: 'NutButter',
    description: 'Crunchy almond butter made from premium roasted almonds. Packed with protein and healthy fats, great for smoothies or toast.'
  },
  {
    id: 8,
    name: 'Crunchy Almond Butter & Dark Chocolate Nut Butter Combo',
    price: 945,
    img: 'https://www.rosierfoods.com/cdn/shop/files/IMG-1795.jpg?v=1743060382&width=713',
    category: 'NutButter',
    description: 'A delicious combo of crunchy almond butter and dark chocolate nut butter. Perfect for gifting or indulging yourself.'
  },
  {
    id: 9,
    name: 'Nut Butter',
    price: 390,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Front.jpg?v=1743060301&width=713',
    category: 'NutButter',
    description: 'Smooth and creamy nut butter made from high-quality nuts. A versatile spread for breakfast or snacks.'
  },
  {
    id: 10,
    name: 'Wild Forest Honey (Pack of 2)',
    price: 1059,
    img: 'https://www.rosierfoods.com/cdn/shop/files/Packof2Honey.jpg?v=1746535919&width=713',
    category: 'Raw Honey',
    description: 'A pack of two jars of pure wild forest honey, naturally sweet and rich in flavor. Perfect for daily use or gifting.'
  },
  {
    id: 11,
    name: 'Better Bars Cocoa & Almond',
    price: 290,
    img: 'https://www.rosierfoods.com/cdn/shop/files/1_Cocoa_Almond.jpg?v=1743769781&width=713',
    category: 'Better Bars',
    description: 'A wholesome energy bar combining rich cocoa and crunchy almonds. Perfect for a quick, nutritious snack.'
  },
  {
    id: 12,
    name: 'Better Bars Berry & Coconut',
    price: 290,
    img: 'https://www.rosierfoods.com/cdn/shop/files/7_Berry_Coconut.jpg?v=1743769781&width=713',
    category: 'Better Bars',
    description: 'A refreshing mix of sweet berries and tropical coconut in a healthy energy bar. Ideal for an on-the-go boost.'
  },
  {
    id: 13,
    name: 'Stone Pressed Black Mustard Oil 5 Ltr',
    price: 1799,
    img: 'https://www.rosierfoods.com/cdn/shop/files/215E4D0A-62D5-4B25-8B4B-AB35582AB5B4.jpg?v=1750845571&width=713',
    category: 'Oils',
    description: 'A large 5-liter can of stone-pressed black mustard oil, perfect for bulk cooking. Adds a robust flavor to your dishes.'
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = useRef([]);
  const containerRef = useRef(null);
  const selectRef = useRef(null);
  const popupRef = useRef(null);

  const categories = ['All', ...new Set(dummyProducts.map((product) => product.category))];

  const filteredProducts =
    selectedCategory === 'All'
      ? dummyProducts
      : dummyProducts.filter((product) => product.category === selectedCategory);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProduct]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        selectRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );

      productRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 100, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none none',
                markers: false,
              },
            }
          );
        }
      });

      if (selectedProduct && popupRef.current) {
        gsap.fromTo(
          popupRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        gsap.set(containerRef.current, { clearProps: 'all' });
      }
      document.body.style.height = 'auto';
    };
  }, [filteredProducts, selectedProduct]);

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

  const handleButtonHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.1 : 1,
      backgroundColor: enter ? '#2563eb' : '#3b82f6',
      boxShadow: enter ? '0 5px 15px rgba(0,0,0,0.3)' : 'none',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleImageLoad = (index) => {
    gsap.fromTo(
      productRefs.current[index].querySelector('img'),
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  };

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
          onComplete: () => {
            window.scrollTo(0, 0);
            document.body.style.height = 'auto';
            document.body.offsetHeight; // Trigger reflow
          },
        });
      },
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    gsap.to(popupRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => setSelectedProduct(null),
    });
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-white h-auto"
      ref={containerRef}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          {selectedCategory === 'All' ? 'Our Products' : selectedCategory}
        </h1>
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
            className="border rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transform transition-all cursor-pointer"
            ref={(el) => (productRefs.current[index] = el)}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
            onClick={() => handleProductClick(product)}
          >
            <div className="relative w-full pt-[100%]">
              <img
                src={product.img}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
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
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
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

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-[#748DAE] bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
          <div
            ref={popupRef}
            className="bg-white rounded-xl p-4 max-w-md w-full relative shadow-xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-full max-h-64 object-contain mb-2"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
              }}
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-2">{selectedProduct.description || 'No description available.'}</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">Price: ₹{selectedProduct.price}</p>
            <button
              onClick={() => {
                addToCart(selectedProduct);
                handleClosePopup();
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium w-full hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;