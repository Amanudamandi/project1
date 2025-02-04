import React from "react";
import img from "../assets/galoenergy_genrate_an_image_of_TOPCon_Solar_panel_using_large_s_973c7345-92ef-44bf-a45c-19d015239b66 2.png";
import { FaCogs, FaWrench, FaTools, FaFlask } from "react-icons/fa"; // Import icons from React Icons

const ServicesSection = () => {
  return (
    <section
      id="services" className="relative bg-cover bg-center bg-no-repeat h-screen py-3 mt-3 "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-6 py-16 text-center max-w-screen-xl">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-32">
          {/* Service Item 1 */}
          <div className="text-white">
            <div className="hover:opacity-90 hover:bg-blue-900 hover:text-white w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-white text-black mb-4">
              <FaCogs className="text-3xl" /> {/* Icon for EPC Services */}
            </div>
            <h3 className="font-semibold text-lg">EPC Services</h3>
          </div>
          {/* Service Item 2 */}
          <div className="text-white">
            <div className="hover:opacity-90 hover:bg-blue-900 hover:text-white w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-white text-black mb-4">
              <FaWrench className="text-3xl" /> {/* Icon for Operation & Maintenance */}
            </div>
            <h3 className="font-semibold text-lg">Operation & Maintenance</h3>
          </div>
          {/* Service Item 3 */}
          <div className="text-white">
            <div className="hover:opacity-90 hover:bg-blue-900 hover:text-white w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-white text-black mb-4">
              <FaTools className="text-3xl" /> {/* Icon for Installation Services */}
            </div>
            <h3 className="font-semibold text-lg">Installation Services</h3>
          </div>
          {/* Service Item 4 */}
          <div className="text-white">
            <div className="hover:opacity-90 hover:bg-blue-900 hover:text-white w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-white text-black mb-4">
              <FaFlask className="text-3xl" /> {/* Icon for Engineering Services */}
            </div>
            <h3 className="font-semibold text-lg">Engineering Services</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
