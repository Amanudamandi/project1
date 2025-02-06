import React from 'react'
import { FaPiggyBank } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { GiSolarPower } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';
import { BsCalendarCheck } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
// import featuretop from '../assets/featuretop.png'
import featurebot from '../assets/Group 591 (2).png'
// import featurebot from '../assets/feature-bottom.png'
import featuretop from '../assets/Group 633 (1).png'
import "../App.css"

// feature imgs---
import f1 from '../assets/fatures/f1.png'
import f2 from '../assets/fatures/f2.png'
import f3 from '../assets/fatures/f3.png'

import bgImg from "../assets/Rectangle 147.png"


{/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div><FaPiggyBank /> Money Saving</div>
      <div><MdVerified /> Quality Installation</div>
      <div><GiSolarPower /> High Efficiency Solar</div>
      <div><FaRobot /> Robotic Production</div>
      <div><BsCalendarCheck /> 30+ Years High Performance</div>
      <div><AiOutlineCheckCircle /> Approved</div>
    </div> */}

const fetcures = [
    {
        icon: <FaPiggyBank />,
        title: 'Money Saving',
        description: '80% Savings on Electricity Bills'
    },
    {
        icon: <MdVerified />,
        title: 'Quality Installation',
        description: 'Fast & Hi-Quality Installation'
    },
    {
        icon: <GiSolarPower />,
        title: 'High Efficiency Solar',
        description: 'High-Efficiency Solar Panels (More than 22.8%)'
    },
    {
        icon: <FaRobot />,
        title: 'Robotic Production',
        description: 'Robotic Production Line'
    },
    {
        icon: <BsCalendarCheck />,
        title: '30+ Years High Performance',
        description: '30+  Years 30+ Years High Performance'
    },
    {
        icon: <AiOutlineCheckCircle />,
        title: 'Approved',
        description: 'ALMM & BIS Certified'
    }
]

const feautersImgs = [
    {
        imgUrl: f1
    },
    {
        imgUrl: f2
    },
    {
        imgUrl: f3
    }
]


const Features = () => {
    return (
        // <div className=' features-sec '>
        //     <div className='image-container'>
        //         <img src={featuretop} alt="" className=' ' />
        //     </div>
        //     <div className="relative feature-content h-screen bg-cover bg-center flex flex-col items-center justify-center p-8" style={{ backgroundImage: `url(${bgImg})` }}>

        //         {/* Overlay for better visibility */}
        //         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        //         {/* Content Wrapper */}
        //         <div className="heading relative z-10 text-center text-white">
        //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        //                 Why us & Why Gautam Solar?
        //             </h1>

        //             {/* Feature Boxes */}
        //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        //                 {fetcures.map((feature, index) => (
        //                     <div key={index} className="mainbox bg-white bg-opacity-90 text-black rounded-2xl p-6 w-64 h-32 flex items-center justify-center shadow-lg">
        //                         <div className="description text-lg font-semibold text-center">
        //                             {feature.description}
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>

        // </div>


        <div className="features-sec">
            <div className="image-container">
                <img src={featuretop} alt="" className="" />
            </div>

            <div
                className="relative feature-content h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 sm:p-8"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                {/* Overlay for better visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content Wrapper */}
                <div className="heading relative z-10 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Why us & Why Gautam Solar?
                    </h1>

                    {/* Feature Boxes with Optimized Bottom Margin */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-8 md:mb-12">
                        {fetcures.map((feature, index) => (
                            <div
                                key={index}
                                className="mainbox bg-white bg-opacity-90 text-black rounded-2xl p-4 sm:p-6 w-full sm:w-64 h-auto min-h-[100px] md:h-32 flex items-center justify-center shadow-lg"
                            >
                                <div className="description text-sm sm:text-lg font-semibold text-center">
                                    {feature.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Features
