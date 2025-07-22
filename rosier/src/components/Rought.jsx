import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import brandLogo from '/images/brandLogo.png';


const Nav = () => {
  useEffect(() => {
    // GSAP Animations
    // Logo animation: Fade in and scale up
    gsap.fromTo(
      '.logo',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.2 }
    );

    // Address and contact animation: Slide in from right with stagger
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-[#7B4019] px-[4%] py-4 flex justify-center lg:justify-between items-center">
      {/* Left Part - Logo */}
      <div className="leftPart">
        <img
          src={brandLogo}
          alt="Brand Logo"
          className="logo w-24 h-24 lg:w-20 lg:h-20 object-contain"
        />
      </div>
      {/* Right Part - Address and Contact */}
      <div className="rightPart hidden lg:flex gap-6 items-center justify-end">
        <div className="nav-item address flex gap-3 w-[45%]">
          <i className="ri-map-pin-line text-3xl text-white"></i>
          <p className="text-white text-sm lg:text-base">
            B-2994/75, B-Block, Gali no- 75, Sant Nagar, Burari, Delhi-110084
          </p>
        </div>
        <div className="nav-item contactdetails flex items-center gap-3">
          <i className="ri-phone-line text-3xl text-white border w-fit px-2 py-1 h-fit rounded-full"></i>
          <p className="text-white text-sm lg:text-base">+91-9711580581</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;