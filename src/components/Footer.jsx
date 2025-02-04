import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa'; // Import icons

const footerContent = [
    {
        title: "HELP AND SUPPORT",
        links: [
            "Request a site visit",
            "About us",
            "Support",
            "Contact us",
        ],
    },
    {
        title: "CONTACT US",
        content: [
            "+91 9455850357",
            "asmgv5@gmail.com",
        ],
    },
    {
        title: "ADDRESS",
        content: [
            "NARAYN NAGAR - 8 CORNER NARAYAN NAGAR MAIN ROAD NR MALVIYA FATAK GONDAL ROAD RAJKOT - 360002"
        ],
    },
];

const Footer = () => {
    return (
        <footer id="contact" className="bg-gradient-to-b from-white-800 to-black text-[#0A368B] py-8">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center text-4xl font-bold mb-6">
                    ASM Golden Vision Private Limited
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* CONNECT WITH US Section */}
                    <div className="text-left">
                        <h3 className="text-lg font-semibold mb-2">CONNECT WITH US</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-75">
                                <FaFacebook className="w-8 h-8" />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <FaInstagram className="w-8 h-8" />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <FaYoutube className="w-8 h-8" />
                            </a>
                            <a href="#" className="hover:opacity-75">
                                <FaGlobe className="w-8 h-8" />
                            </a>
                        </div>
                    </div>

                    {/* Dynamically Generated Sections */}
                    {footerContent.map((item) => (
                        <div key={item.title} className="text-left">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            {item.links ? (
                                <ul className="list-none p-0">
                                    {item.links.map((link) => (
                                        <li key={link} className="mb-2">
                                            <a href="#" className="hover:underline">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div>
                                    {item.content.map((content) => (
                                        <p key={content} className="mb-2">
                                            {content}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
