"use client"
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Navbar from '@/components/NavBar';
import { useState } from 'react';
import WaveText from '@/components/WaveText';
import Universities from '@/components/Universities';
import ImageSwitcher from '@/components/ImageSwitcher';
import Journey from '@/components/Journey';


const AnimatedButton = ({ children, href, className = "" }) => (
  <a 
    href={href} 
    className={`relative inline-flex items-center px-12 py-3 overflow-hidden text-lg  font-bold border-2 border-white rounded-full text-indigo-600 group bg-gray-50 ${className}`}
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
      <section className="relative  h-[88vh]  bg-[url(/home.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 sm:bg-transparent opacity-40 from-[#000000] to-[#000000] bg-gradient-to-r"></div>
        <Navbar />
        <div className="relative  mt-5 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="text-left  w-full">
          <h1 className="text-7xl  font-bold text-center  tracking-tight">
            <WaveText text="We Make Global Education Easy" />
          </h1>
           
          </div>
        </div>
        {showButtons && (
              <motion.div 
                className="mt-3 flex flex-wrap justify-center gap-6"
                variants={buttonContainer}
                initial="hidden"
                animate="show"
              >
                
                
                <motion.div className="flex gap-24" variants={buttonItem}>
                  <AnimatedButton href="/contact">
                    Join as Student
                  </AnimatedButton>
                  <AnimatedButton href="/contact">
                    Join as Partner
                  </AnimatedButton>
                  <AnimatedButton href="/contact">
                    Join as Institution
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            )}
      </section>
    
    </div>
    
    <ImageSwitcher/>
  <Universities/>
  <Journey/>
  <Footer/>
  </>
  )
}

export default page
