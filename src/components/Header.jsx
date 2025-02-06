import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import badge from '../assets/Group 629.png'; // Replace with the actual path to your badge
import logo from '../assets/Layer 1.png'; // Replace with the actual path to your logo


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="bg-gradient-to-r from-white to-[#072dec] text-white"
      style={{
        background: 'linear-gradient(90deg, #FFFFFF 0%, rgb(21, 18, 71) 40%)',
      }}
    >
      {/* Header Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between py-4 px-4 relative">
        {/* Left Section: Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Company Logo" className="w-30 h-30 md:w-18 md:h-16 object-contain" />
        </div>

        {/* Center Section: Heading */}
        <h1 className="text-lg md:text-4xl font-bold text-center mx-auto my-2 md:my-0">
          ASM Golden Vision Private Limited
        </h1>

        {/* Right Section: Badge */}
        <div className="flex-shrink-0">
          {/* <img src={badge} alt="Certified Badge" className="w-35 h-35 md:w-20 md:h-20 object-contain" /> */}
          <img src={badge} alt="Certified Badge" className="w-[150px] h-[150px] object-contain" />

        </div>

        {/* Toggler Button (Visible on Small Devices) */}
        <div
          className="md:hidden text-black absolute top-4 right-4 cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={` flex bg-white text-black ${isMenuOpen ? 'block' : 'hidden'} md:flex gap-x-4 md:gap-8 py-2 text-sm md:text-base font-medium`}
      >
        <ul className="flex w-full flex-col md:flex-row justify-evenly items-start gap-y-2 md:gap-y-5 ">
          <li className="hover:text-blue-500 cursor-pointer px-4">

            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer px-4">
            <a href="#about">About Us</a>
          </li>

          <li className="hover:text-blue-500 cursor-pointer px-4">
            <a href="#services">Enquiry</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer px-4">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
