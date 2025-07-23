// src/components/ContactForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  // Refs for GSAP animations
  const leftColumnRef = useRef(null);
  const formCardRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    // Optional: Add a submission animation
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut'
    });
  };

  useEffect(() => {
    // Animate left column (fade in and slide up)
    gsap.fromTo(
      leftColumnRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate form card (scale and fade in)
    gsap.fromTo(
      formCardRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );

    // Animate form inputs (staggered entrance)
    gsap.fromTo(
      inputRefs.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5
      }
    );

    // Button hover animation
    const button = buttonRef.current;
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        backgroundColor: '#1B3C53',
        duration: 0.3,
        ease: 'power1.out'
      });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: '#456882',
        duration: 0.3,
        ease: 'power1.out'
      });
    });

    // Cleanup event listeners
    return () => {
      button.removeEventListener('mouseenter', () => {});
      button.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ffdbd4] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div ref={leftColumnRef} className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Get In <span className="font-extrabold text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            We’d love to hear about your experience with <b className="font-extrabold text-blue-600">Rosier</b>. Please get in touch with any comments, suggestions or questions you might have.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:soluvent@gmail.com" className="text-gray-800 hover:text-blue-600">
                care@rosierfoods.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-600 text-xl" />
              <a href="tel:+1234567890" className="text-gray-800 hover:text-blue-600">
                +91-9711580581
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form Card */}
        <div ref={formCardRef} className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div ref={el => (inputRefs.current[0] = el)}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div ref={el => (inputRefs.current[1] = el)}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Your Email"
              />
            </div>

            {/* Mobile Input */}
            <div ref={el => (inputRefs.current[2] = el)}>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Your Mobile Number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
              />
            </div>

            {/* Message Textarea */}
            <div ref={el => (inputRefs.current[3] = el)}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Tell us about your needs"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                ref={buttonRef}
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#456882] hover:bg-[#1B3C53] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get a Solution <FaArrowRight className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;