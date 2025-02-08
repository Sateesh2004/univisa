"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageTextSwitcher = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    const images = [
        "/slider3.jpg",
        "/slider1.jpg",
        "/slider2.jpg",
    ];

    const headings = ["INTERNATIONAL STUDENTS", "RECRUITMENT PARTNERS", "PARTNER INSTITUTIONS"];
    const descriptions = [
        "Unlock global opportunities with our expert guidance. From university selection to visa support we make your study abroad journey seemless & stress-free.",
        "Partner with us for seemless study abroad experience. Gain access to top institutions, competitive commissions & dedicated suppport to grow your business.",
        "Partner with us to attract global talent. Enjoy seemless processes & dedicated support for your institution's growth.",
    ];

    const handleHeadingClick = (index) => {
        setPrevIndex(activeIndex);
        setActiveIndex(index);
        setShowText(false);
    };

    const direction = activeIndex > prevIndex ? 1 : -1;

    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 300);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
            <h1 className="text-6xl  font-bold mb-12 text-center">Committed to Your Journey</h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-12 items-center justify-center">
                {headings.map((heading, index) => (
                    <button
                        key={index}
                        className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full  transition-all duration-300 hover:bg-blue-50 
                            ${activeIndex === index 
                                ? "text-blue-600 bg-blue-50  border-2  border-blue-500" 
                                : "text-gray-600 hover:text-blue-500 bg-[#e8edef]"}`}
                        onClick={() => handleHeadingClick(index)}
                    >
                        {heading}
                    </button>
                ))}
            </div>

            {/* Content Row */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
                {/* Text Column */}
                <div className="w-full lg:w-1/3 min-h-[200px] lg:h-[400px] flex items-center justify-center">
                    {showText && (
                        <motion.div
                            className="text-base md:text-lg text-gray-700 bg-white p-6 rounded-xl shadow-lg"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {descriptions[activeIndex]}
                        </motion.div>
                    )}
                </div>

                {/* Image Column */}
                <div className="w-full lg:w-2/3 h-[300px] md:h-[400px] relative overflow-hidden rounded-2xl shadow-xl">
                    <motion.img
                        key={activeIndex}
                        src={images[activeIndex]}
                        alt={`Image ${activeIndex + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300" />
                </div>
            </div>

            {/* Indicator Row */}
            <div className="mt-8 flex justify-center space-x-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleHeadingClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
                            ${activeIndex === index 
                                ? "bg-blue-600 w-6" 
                                : "bg-gray-300 hover:bg-gray-400"}`}
                        aria-label={`Switch to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageTextSwitcher;