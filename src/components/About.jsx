import React from 'react';
import "../App.css"
import img1 from "../assets/Rectangle 136.png"
import img2 from "../assets/Rectangle 137.png"
import img3 from "../assets/Rectangle 138.png"
import img4 from "../assets/Rectangle 139.png"

const images = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img2, alt: "Image 2" },
    { id: 3, src: img3, alt: "Image 3" },
    { id: 4, src: img4, alt: "Image 4" },
    { id: 5, src: img1, alt: "Image 5" },
];


const About = () => {
    const services = [
        "Customized Solar Solutions",
        "Procurement of High-Quality Components",
        "Installation & Maintenance",
        "Energy Efficiency Consultation"
    ];

    return (
        <div id="about" className="flex flex-col w-full h-full">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white p-8 md:p-12 min-h-[700px]">
                <div className=" container mx-auto flex flex-col md:flex-row items-stretch gap-8 h-full">

                    {/* Left Content Section */}
                    <div className="w-1/2 text-2xl font-medium  flex flex-col justify-between p-6 h-full">
                        <div>
                            <h1 className="text-4xl md:text-4xl font-bold mb-2">
                                <span className="font-normal">Welcome to</span><br />
                                ASM Golden Vision Pvt. Ltd.
                            </h1>
                            <p className=" mt-4 font-light">
                                We specialize in delivering comprehensive EPC solutions in Solar Power, Wind Energy, and Real Estate.
                                With expertise in renewable energy and infrastructure development, we provide end-to-end services, ensuring efficient project execution and sustainable results.
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="mb-4 font-light">
                                Our commitment to quality is strengthened by our partnership with
                                <span className="font-bold"> Gautam Solar</span>, using their UL and IEC certified solar panels.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Our Services:</h3>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    {/* Right Image Section */}
                    <div id="right-div" className="w-1/2 flex flex-wrap gap-2 items-center min-h-full">
                        {images.map((image) => (
                          
                            <div key={image.id}  className="h-[150px] w-100px  flex items-center justify-center" 
                            id={`child${image.id}`}
                            >
                                <img src={image.src} alt={image.alt} className="h-full w-full object-cover rounded-sm" />
                            </div>
                        ))}
                    </div>


                </div>
            </section>


            {/* Who We Are Section */}
            <section className="bg-blue-900 text-white py-8 my-3 ">
                <div className="container pl-8 w-full text-wrap">
                    <div className="space-y-12 ">
                        <div className=" w-full text-xl  ">
                            <h2 className="text-3xl font-bold mb-6w-full mb-5">Who We Are?</h2>
                            <p className="text-gray-200 font-light ">
                                <strong>ASM Golden Vision Private Limited</strong> specializes in delivering end-to-end EPC solutions in Solar Power. With
                                a focus on innovation and sustainability, we design, execute, and manage projects that empower businesses with renewable
                                energy and a brighter tomorrow, driving India's economy to its greener, cleaner future.
                            </p>
                        </div>

                        <div className='w-full'>
                            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                            <div className="space-y-4 w-full text-xl pl-4 ">
                                <div className=" rounded-lg">
                                    <h3 className="font-medium mb-2">Experienced and Certified Team:</h3>
                                    <p className="text-gray-200 font-extralight ">Our team of experts brings years of experience and holds industry certifications, ensuring your solar project is handled by skilled professionals. We stay updated with the latest technologies and regulations, delivering efficient and compliant solutions. </p>
                                </div>
                                <div className=" rounded-lg">
                                    <h3 className="font-medium mb-2 ">Comprehensive Project Management:</h3>
                                    <p className="text-gray-200 font-extralight">We manage every aspect of your solar project, from consultation to maintenance. Our end-to-end project management ensures timely delivery, budget adherence, and a smooth, hassle-free experience, allowing you to focus on enjoying the benefits of solar energy.</p>
                                </div>
                                <div className=" rounded-lg">
                                    <h3 className="font-medium mb-2">High-Quality Solar Products:</h3>
                                    <p className="text-gray-200 font-extralight">We use top-tier solar products from trusted manufacturers, including solar panels by Gautam Solar, which are certified as per UL and IEC standards. This ensures durability, efficiency, and minimal maintenance, providing you with long-lasting and effective solar solutions.</p>
                                </div>
                                <div className="  rounded-lg">
                                    <h3 className="font-medium mb-2">Commitment to Sustainability:</h3>
                                    <p className="text-gray-200 font-extralight">Sustainability is at the heart of our mission. We help you reduce your carbon footprint with eco-friendly solar solutions while implementing green practices in our operations. By choosing us, you’re contributing to a cleaner, more sustainable future.</p>
                                    <br />
                                    <p className="text-gray-200 font-extralight">We believe in building long-term relationships with our clients by ensuring their solar projects are completed on time, within budget, and to the highest standards. Whether you're looking to power your home, business, or industrial facility, <strong>ASM Golden Vision Private Limited</strong> is your partner in achieving energy independence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;