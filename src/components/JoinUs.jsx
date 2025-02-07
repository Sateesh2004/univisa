import Link from 'next/link'
import React from 'react'

const JoinUs = () => {
  return (
    <div className="bg-gray-700 p-4 min-h-screen">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2 mt-12  text-gray-100">
      
      <h2 className="my-8 text-2xl font-bold text-white text-end relative left-[98px] w-full md:text-4xl">Why UniViza</h2>
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
    <Link href="/contact#form">
      <button className='text-center mt-5 bg-white p-2 font-bold text-[20px] block border rounded'>Apply Now </button>
      </Link>
  </div>
</div>
  )
}

export default JoinUs
