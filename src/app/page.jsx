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
import Link from 'next/link';


const AnimatedButton = ({ children, href, className = "" }) => (
  <Link 
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
  </Link>
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
    <section className="relative h-[88vh] bg-[url(/home.jpg)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <Navbar />

  <div className="relative flex flex-col items-center justify-center text-center text-white px-6 py-32 lg:py-32 max-w-5xl mx-auto z-10">
    <h1 className="text-2xl text-wrap sm:text-2xl lg:text-6xl font-bold tracking-tight [text-shadow:_0_2px_4px_black]">
      <WaveText text="We  Make Global Education Easy" />
    </h1>

    {showButtons && (
      <motion.div
        className="mt-32 flex flex-col  sm:flex-col md:flex-row gap-4 sm:gap-6 justify-center"
        variants={buttonContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={buttonItem}>
          <AnimatedButton className='text-sm w-full lg:text-xl' href="/students">Join as Student</AnimatedButton>
        </motion.div>
        <motion.div  variants={buttonItem}>
          <AnimatedButton className='text-sm w-full lg:text-xl' href="/recruitment-partners">Join as Partner</AnimatedButton>
        </motion.div>
        <motion.div  variants={buttonItem}>
          <AnimatedButton className='text-sm lg:text-xl' href="/institutions">Join as Institution</AnimatedButton>
        </motion.div>
      </motion.div>
    )}
  </div>
</section>


      </div>
    
    <ImageSwitcher/>
       <Universities heading="Top Study Abroad Destinations" />
 
  <Journey/>
  <Footer/>
  </>
  )
}

export default page
