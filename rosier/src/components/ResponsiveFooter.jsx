import React from 'react';
import brandLogo from '/images/brandLogo.png';

export default function ResponsiveFooter() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1584946815081-7fb21ed8c450?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <div className="mb-4">
            <img src={brandLogo} alt="Brand Logo" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/FlyingBeast320" target="_blank" className="text-gray-200 hover:text-blue-400 transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/taneja.gaurav/" target="_blank" className="text-gray-200 hover:text-pink-400 transition-colors duration-200">
             <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="https://x.com/flyingbeast320" target="_blank" className="text-gray-200 hover:text-blue-300 transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Check-In/Check-Out Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
          {/* Check-In Box */}
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Check-In</h3>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-green-600">2:00 PM</p>
              <p className="text-gray-600 mt-1">Monday - Sunday</ p>
            </div>
          </div>

          {/* Check-Out Box */}
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Check-Out</h3>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-red-600">11:00 AM</p>
              <p className="text-gray-600 mt-1">Monday - Sunday</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Location */}
          <div className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-base">Sant Nagar, Burari, Delhi</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+61362345678" className="text-base hover:underline">
              +91-9711580581
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:care@rosierfoods.com" className="text-base hover:underline">
              care@rosierfoods.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Dark Strip */}
      <div className="bg-gray-900 py-2">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-300 text-sm">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}