"use client"
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import React, { useEffect } from 'react'

import Navbar from '@/components/NavBar';
import { motion } from 'framer-motion';
import WaveText from '@/components/WaveText';
import { useState } from 'react';




const AnimatedButton = ({ children, href, className = "" }) => (
  <a 
    href={href} 
    className={`relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-bold  border-2 border-white rounded-full text-indigo-600 group bg-gray-50 ${className}`}
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

const page = () => {
  
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
        }}
  return (
    <>
    
    <div>
      {/* <section className="relative h-[88vh] bg-[url(/insmain.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 sm:bg-transparent opacity-40 from-[#000000] to-[#000000] bg-gradient-to-r"></div>
        <Navbar />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="text-left w-full">
          <h1 className="text-7xl font-bold text-center  tracking-tight">
            <WaveText text="Maximize Your International Reach" />
          
          </h1>
           
          </div>
        </div>
        {showButtons && (
              <motion.div 
                className="mt-8 flex flex-wrap justify-center gap-6"
                variants={buttonContainer}
                initial="hidden"
                animate="show"
              >
                
                
                <motion.div variants={buttonItem}>
                  <AnimatedButton href="/contact?type=Institutions">
                    Make Your Campus Global
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            )}
      </section> */}
       <section className="relative h-[88vh] bg-[url(/insmain.jpg)]  bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <Navbar />

  <div className="relative flex flex-col items-center justify-center text-center text-white px-6 py-32 lg:py-32 max-w-5xl mx-auto z-10">
    <h1 className="text-2xl truncate text-wrap sm:text-2xl lg:text-6xl font-bold tracking-tight [text-shadow:_0_2px_4px_black]">
      <WaveText text="Maximize Your International" />
      <WaveText text=" Reach" />
    </h1>

    {showButtons && (
      <motion.div
        className="mt-32 flex flex-col  sm:flex-col md:flex-row gap-4 sm:gap-6 justify-center"
        variants={buttonContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={buttonItem}>
          <AnimatedButton className='text-sm w-full lg:text-xl' href="/contact?type=institution">Join as Institution</AnimatedButton>
        </motion.div>
       
      </motion.div>
    )}
  </div>
</section>
    </div>
    



<section className="py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl text-black font-bold text-center mb-16">
          Why Choose UniViza
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* First Row */}
          <div className="bg-white rounded-2xl p-8 transform transition-transform duration-300 shadow-xl max-w-[350px] w-full mx-auto h-fit">
            <div className="h-20 w-20 mx-auto mb-6">
              <img
                src="/insw1.png"
                className="w-full h-full object-contain"
                alt="High-Quality Student Applications"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
            High-Quality Student Applications       </h3>
            <p className="text-gray-600 text-center">
            Providing exceptional student applications for successful admissions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 transform transition-transform duration-300 shadow-xl max-w-[350px] w-full mx-auto h-fit">
            <div className="h-20 w-20 mx-auto mb-6">
              <img
                src="/insw2.png"
                className="w-full h-full object-contain"
                alt="Personalized Marketing & Outreach"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
            Personalized Marketing & Outreach
            </h3>
            <p className="text-gray-600 text-center">
            Personalized marketing strategies and effective outreach for maximum impact.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 transform transition-transform duration-300 shadow-xl max-w-[350px] w-full mx-auto h-fit">
            <div className="h-20 w-20 mx-auto mb-6">
              <img
                src="/insw3.png"
                className="w-full h-full object-contain"
                alt="Building Long Term Relationships"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">
            Building Long Term Relationships           </h3>
            <p className="text-gray-600 text-center">
            We foster lasting partnerships through trust, transparency and mutual growth.
            </p>
          </div>

          {/* Second Row with centering wrapper */}
          <div className="lg:col-span-3 flex justify-center gap-8 flex-wrap">
            <div className="bg-white rounded-2xl p-8 transform transition-transform duration-300 shadow-xl max-w-[350px] w-full h-fit">
              <div className="h-20 w-20 mx-auto mb-6">
                <img
                  src="/insw4.png"
                  className="w-full h-full object-contain"
                  alt="Document Verification"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
              Document Verification
              </h3>
              <p className="text-gray-600 text-center">
              Verification of all essential documents for a smooth admission process.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 transform transition-transform duration-300 shadow-xl max-w-[350px] w-full h-fit">
              <div className="h-20 w-20 mx-auto mb-6">
                <img
                  src="/insw5.png"
                  className="w-full h-full object-contain"
                  alt="Admission Ready Applications"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
              Offer Ready Applications
              </h3>
              <p className="text-gray-600 text-center">
              Thoroughly verified and fully prepared applications for successful admissions.

                     </p>
            </div>
          </div>
        </div>
      </div>
    </section>






  <Process count={1} />
  <Footer/>
  </>
  )
}

export default page
