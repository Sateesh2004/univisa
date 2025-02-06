"use client"
import React from 'react'
import Typical from 'react-typical';
const page = () => {
  return (
    
    
  <div>
  <section
    className="relative h-[80vh] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
  >
    <div
      className="absolute inset-0 sm:bg-transparent from-[#1a48ce] to-[#ffffff00] bg-gradient-to-r "
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-left">
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
      
       
        <Typical
                steps={[
                  'Partner with us for hassle-free admissions & expert support',
                  4000,
                  
                ]}
                
                wrapper="span"
              />
        </h1>
  
        
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-[#1a48ce] shadow-sm  focus:ring-3 focus:outline-hidden sm:w-auto"
          >
            Get Started
          </a>
  
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default page
