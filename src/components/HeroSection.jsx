import React from 'react';
import heroSection from '../assets/Rectangle 2.png'; // Replace with the actual path to your image

const HeroSection = () => {
  return (
    <section id="about" className="relative h-[500px] md:h-[600px]">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroSection}
        alt="Hero Background"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Overlay Content */}
    <div className="absolute inset-0  bg-black bg-opacity-50 flex flex-col justify-start items-end text-center px-6">
      {/* Main Heading */}
      <h1 className="text-3xl  md:text-5xl font-bold  text-white mb-6 mt-30 mr-5 md:mt-28">
        Powering generations with <br />  <span className="mt-6 mr-2 block">Reliable Solar Solutions</span> 
      </h1>

      {/* Subheading/Button */}
      <button className="bg-blue-600 border-2 border-solid border-white text-white px-6 mt-20 mr-6  py-3 rounded-md font-extralight hover:bg-blue-700 transition">
        Quick and Easy Solar Solutions for Your Home or Business
      </button>
    </div>
  </section>
  );
};

export default HeroSection;
