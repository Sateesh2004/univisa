import Image from 'next/image'
import React from 'react'

const Process = (props) => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
        <h1 className='text-center mt-12 text-6xl font-bold'>How it Works</h1>
    <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                        fill="none">
                        <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
                    </svg>
                </div>
                <div
                    className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div
                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white  rounded-full ">
                            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                <Image src="/step1.png" alt="step1" width={100} height={100}/>
                            </span>
                        </div>
                        <h3
                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            Profile Assessment
                        </h3>
                        
                    </div>
                    <div>
                        <div
                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800  rounded-full">
                            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                <img src="/step2.png" width={100} height={100} alt="" />
                            </span>
                        </div>
                        <h3
                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            Instituion/Program Selection
                        </h3>
                        
                    </div>
                    <div>
                        <div
                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 ">
                            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            <img src="/step3.png" width={100} height={100} alt="" />
                            </span>
                        </div>
                        <h3
                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            Application Submission
                        </h3>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                        fill="none">
                        <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
                    </svg>
                </div>
                <div
                    className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div
                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white ">
                            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            <img src="/step4p.png" width={100} height={100} alt="" />
                            </span>
                        </div>
                        <h3
                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            Application Review by Institution
                        </h3>
                        
                    </div>
                    <div>
                        <div
                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white  ">
                            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            <img src="/step4.png" width={100} height={100} alt="" />
                            </span>
                        </div>
                        <h3
                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            Visa Outcome
                        </h3>
                       
                    </div>
                    <div>
                        <div
                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white">
                            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            <img src="/step6.png" width={100} height={100} alt="" />
                            </span>
                        </div>
                        <h3
                            className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            Student Enrolled
                        </h3>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Process
