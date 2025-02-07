"use client"
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import React from 'react'

import Navbar from '@/components/NavBar';

import WaveText from '@/components/WaveText';
import Universities from '@/components/Universities';

const page = () => {
  return (
    <>
    
    <div>
      <section className="relative h-[100vh] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 sm:bg-transparent opacity-40 from-[#000000] to-[#000000] bg-gradient-to-r"></div>
        <Navbar />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="text-left w-full">
          <h1 className="text-8xl font-bold text-center  tracking-tight">
            <WaveText text="Partner with Us" />
            <WaveText text="Empower Your Students" />
          </h1>
           
          </div>
        </div>
      </section>
    </div>
  <div className=' flex flex-col justify-between text-2xl text-center px-24 gap-24 py-10  bg-black '>
  <div className='text-white font-bold text-3xl'>Why UniViza</div>
    <div className='flex  justify-between '>
    <div className='bg-white text-2xl w-[33%] py-10'>
      <img src="/Communication-2.svg"  className='m-auto mb-10 block' alt="1" />
      <p >Choose From</p>
      <p>Top Institutions </p>
      <p>Worldwide</p>
    </div>
    <div className='bg-white w-[33%] py-10'>
      <img src="/Communication-2.svg" className='m-auto mb-10 block' alt="2" />
    <p >Higher Commission</p>
    <p >Rates</p>
    </div>
    <div className='bg-white w-[33%] py-10'>
      <img src="/Communication-2.svg" className='m-auto mb-10 block' alt="3" />
           <p>Complete Support</p>
           <p>From Application</p>
           <p>to Visa</p>
    </div>

  </div>
  </div>
  

  <Universities/>
  <Footer/>
  </>
  )
}

export default page
