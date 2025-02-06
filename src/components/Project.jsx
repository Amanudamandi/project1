import React from 'react';
import "../App.css";
import projectImg1 from '../assets/Mask group.png'; // Replace with actual image paths
import projectImg2 from '../assets/Mask group1.png';
import projectImg3 from '../assets/solar-cell-panels-at-solar-farm-drone-view-green-2023-11-27-05-08-52-utc 1.png';
import projectImg4 from '../assets/solar-panel-photovoltaic-alternative-electricity-2023-11-27-04-56-59-utc 1.png';
import projectImg5 from '../assets/solar-panels-or-solar-cells-renewable-energy-sour-2023-11-27-05-05-36-utc 1.png';
import projectImg6 from '../assets/aerial-view-of-sustainable-electrical-power-plant-2023-11-27-05-05-17-utc 1.png';

const projectData = [
  { imgSrc: projectImg1, title: '2 MW Project in Punjab' },
  { imgSrc: projectImg2, title: '2 MW Project in Punjab' },
  { imgSrc: projectImg3, title: '2 MW Project in Punjab' },
  { imgSrc: projectImg4, title: '2 MW Project in Punjab' },
  { imgSrc: projectImg5, title: '2 MW Project in Punjab' },
  { imgSrc: projectImg6, title: '2 MW Project in Punjab' },
];

const   ProjectHighlights = () => {
  return (
    <div id="services" className="bg-blue-900 mt-5 py-16 px-4" >
       
      <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
        Project Highlights
      </h1>

      <div className="perspective-3d grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 ease-in-out hover:rotate-x-12 hover:scale-110  bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-700">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlights;
