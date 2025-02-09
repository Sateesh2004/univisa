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
      <section className="relative h-[88vh] bg-[url(/ins.jpg)] bg-cover bg-center bg-no-repeat">
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
      </section>
    </div>
    <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-16">
            Why Choose UniViza
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="bg-white w-[30%]   rounded-2xl p-8 transform  transition-transform duration-300 shadow-xl">
              <div className="h-20  w-20 mx-auto mb-6">
                <img
                  src="/insw1.png"
                  className="w-full h-full object-contain"
                  alt="Top Institutions"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
               Quality Applications
              </h3>
              <p className="text-gray-600 text-center">
                Choose from prestigious institutions worldwide for your students
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white w-[30%] rounded-2xl p-8 transform  transition-transform duration-300 shadow-xl">
              <div className="h-20 w-20 mx-auto mb-6">
                <img
                  src="/insw2.png"
                  className="w-full h-full object-contain"
                  alt="Higher Commission"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
               Personalized Marketing and Outreach
              </h3>
              <p className="text-gray-600 text-center">
                Earn competitive commission rates for successful placements
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white w-[30%] rounded-2xl p-8 transform  transition-transform duration-300 shadow-xl">
              <div className="h-20 w-20 mx-auto mb-6">
                <img
                  src="/insw3.png"
                  className="w-full h-full object-contain"
                  alt="Complete Support"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Building Long Term Relationships
              </h3>
              <p className="text-gray-600 text-center">
                End-to-end assistance from application through visa approval
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white w-[30%] rounded-2xl p-8 transform  transition-transform duration-300 shadow-xl">
              <div className="h-20 w-20 mx-auto mb-6">
                <img
                  src="/insw4.png"
                  className="w-full h-full object-contain"
                  alt="Complete Support"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Document Verification
              </h3>
              <p className="text-gray-600 text-center">
                End-to-end assistance from application through visa approval
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white w-[30%] rounded-2xl p-8 transform  transition-transform duration-300 shadow-xl">
              <div className="h-20 w-20 mx-auto mb-6">
                <img
                  src="/insw5.png"
                  className="w-full h-full object-contain"
                  alt="Complete Support"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Verified & Admission ready Applications
              </h3>
              <p className="text-gray-600 text-center">
                End-to-end assistance from application through visa approval
              </p>
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
