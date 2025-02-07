"use client";
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/NavBar';
import WaveText from '@/components/WaveText';
import Universities from '@/components/Universities';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, href, className = "" }) => (
  <a 
    href={href} 
    className={`relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-indigo-600 group hover:bg-gray-50 ${className}`}
  >
    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span className="relative">{children}</span>
  </a>
);

const Page = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const buttonContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const buttonItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        <Navbar />
        
        <div className="relative mx-auto max-w-screen-xl px-4 flex-col py-32 sm:px-6 lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center lg:px-8">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight mb-8">
              <WaveText text="Partner with Us" />
              <WaveText text="Empower Your Students" />
            </h1>
            
            
          </div>
          {showButtons && (
              <motion.div 
                className="mt-12 flex flex-wrap justify-center gap-6"
                variants={buttonContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={buttonItem}>
                  <AnimatedButton href="#learn-more">
                    Learn More
                  </AnimatedButton>
                </motion.div>
                
                <motion.div variants={buttonItem}>
                  <AnimatedButton href="#contact">
                    Get Started
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            )}
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        {/* ... (rest of the code remains unchanged) ... */}
      </section>

      <Universities />
      <Footer />
    </>
  );
};

export default Page;