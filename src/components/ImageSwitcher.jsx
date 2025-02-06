"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageTextSwitcher = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    const images = [
        "/-2.jpg", // Replace with your image URLs
        "/-4.jpg",
        "/-2.jpg",
    ];

    const headings = ["INTERNATIONAL STUDENTS", "RECRUITMENT PARTNERS", "PARTNER INSTITUTIONS"];
    const descriptions = [
        "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
        "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
        "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
    ];

    const handleHeadingClick = (index) => {
        setPrevIndex(activeIndex);
        setActiveIndex(index);
        setShowText(false);
    };

    // Determine animation direction for the image
    const direction = activeIndex > prevIndex ? 1 : -1;

    // Show text after the image animation completes
    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 300); // Image animation duration
        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <div className="w-full min-h-screen  flex flex-col items-center">
            {/* Headings Row */}
            <div className="flex space-x-6  mb-8">
                {headings.map((heading, index) => (
                    <button
                        key={index}
                        className={`text-lg font-semibold p-2 ${activeIndex === index ? "text-blue-600 underline" : "text-gray-600"
                            }`}
                        onClick={() => handleHeadingClick(index)}
                    >
                        {heading}
                    </button>
                ))}
            </div>

            {/* Content Row */}
            <div className=" mx-48 flex justify-between">
                {/* Text Column */}
                <div className="w-[250px] h-[400px]  flex items-center justify-center">
                    {showText && (
                        <motion.div
                            className="text-lg text-gray-700"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {descriptions[activeIndex]}
                        </motion.div>
                    )}
                </div>
                {/* Image Column */}
                <div className="w-1/2 h-[400px] relative overflow-hidden flex items-center justify-center">
                    <motion.img
                        key={activeIndex}
                        src={images[activeIndex]}
                        alt={`Image ${activeIndex + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                        initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Indicator Row */}
            <div className="mt-6 flex space-x-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleHeadingClick(index)}
                        className={`w-4 h-4 rounded-full cursor-pointer ${
                            activeIndex === index ? "bg-blue-600" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageTextSwitcher;
