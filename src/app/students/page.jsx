"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Footer from '@/components/Footer';
import Universities from '@/components/Universities';
const Page = () => {
  

  return (
      <>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto">

<div
    className="my-10 mx-auto max-w-7xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Empower student </span>
            <span className="block text-indigo-600 xl:inline">with seamless study abroad solutions</span>
        </h1>
        <p
            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Partner with us for hassle free admissions & expert support
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
                <a href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                    Get started
                </a>
            </div>
            {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                </a>
            </div> */}
        </div>
    </div>

    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
    </div>
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />







</section>

<div className="bg-gray-700 p-4 min-h-screen">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
        <path fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"></path>
      </svg>
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Why UniViza</h2>
      <p className="text-gray-300">We have good technology</p>
    </div>
    <div
      className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{color:"transparent"}} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Access to Top Instituions & Programs</h5>
            <p className="text-gray-300">Unlock opportunities at world-class universities.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="/School.webp" loading="lazy" width="200" height="200" className="w-8 h-16 rounded-full" style={{color:"transparent"}}  />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hassle Free Application Process</h5>
            <p className="text-gray-300">Seamless documentation and stress-free applications.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="/RP.webp" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{color:"transparent"}}  />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Personalized Support and One-on-One Guidance</h5>
            <p className="text-gray-300">Tailored advice for your unique study goals.

</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="/Student.webp" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{color:"transparent"}} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">End to End Support</h5>
            <p className="text-gray-300">Guiding your journey from start to finish.</p>
          </div>
        </div>
      </div>
    </div>
      <button className='text-center mt-5 bg-white p-2 font-bold text-[20px] block border rounded'>Apply Now </button>
  </div>
</div>



<Universities/>



<Footer/>
</>



  );
};

export default Page;