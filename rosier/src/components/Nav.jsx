// src/components/Nav.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useAuth } from '../AuthContext'; // Import useAuth
import brnadLogo from '../../public/images/brandLogo.png';

// SVG Icons (unchanged)
const Menu = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const CartIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ProfileIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const NavigationBar = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const navItemsRef = useRef([]);

  const navigationItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'About Us', path: '/about', hasDropdown: false },
    { name: 'Products', path: '/shop', hasDropdown: false },
    {
      name: 'Cart',
      path: '/cart',
      hasDropdown: false,
      icon: <CartIcon className="h-5 w-5 inline-block ml-1" />,
    },
    {
      name: user ? 'Profile' : 'Login', // Show "Profile" if logged in, else "Login"
      path: user ? '/profile' : '/login',
      hasDropdown: false,
      icon: <ProfileIcon className="h-5 w-5 inline-block ml-1" />,
    },
    { name: 'Contact Us', path: '/contact-us', hasDropdown: false },
  ];

  // GSAP Animations (unchanged)
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      navItemsRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (index) => {
    gsap.to(navItemsRef.current[index], {
      scale: 1.05,
      color: '#2563eb',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(navItemsRef.current[index], {
      scale: 1,
      color: '#f3f4f6',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <nav
      ref={navRef}
      className="bg-gradient-to-r from-[#7B4019] to-[#5A2E12] shadow-xl sticky top-0 z-50 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src={brnadLogo}
                alt="Brand Logo"
                className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-105"
              />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <NavLink
                      to={item.path}
                      className="flex items-center px-4 py-2 text-gray-100 hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wide"
                      activeClassName="text-blue-400 bg-white/10"
                    >
                      {item.name}
                      {item.icon}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </NavLink>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                        {item.subItems?.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            activeClassName="text-blue-600 bg-blue-50"
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="flex items-center px-4 py-2 text-gray-100 hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wide"
                    activeClassName="text-blue-400 bg-white/10"
                  >
                    {item.name}
                    {item.icon}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-100 hover:text-blue-400 hover:bg-white/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold text-sm uppercase tracking-wide"
                    >
                      {item.name}
                      {item.icon}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems?.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            activeClassName="text-blue-600 bg-blue-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold text-sm uppercase tracking-wide"
                    activeClassName="text-blue-600 bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.icon}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;