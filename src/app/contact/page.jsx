"use client"
import React, { useState } from 'react';

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('Agent');

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 flex ">
             <img className='' src="/contacts.svg" alt="" />
            </div>

            <div className="bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className={`block w-full cursor-pointer p-3 ${selectedOption === 'Agent' ? 'bg-[#1a48ce] text-white' : 'text-gray-600'}`}
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        name="option"
                        checked={selectedOption === 'Agent'}
                        onChange={() => setSelectedOption('Agent')}
                      />
                      <span className="text-sm">Students</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className={`block w-full cursor-pointer p-3 ${selectedOption === 'Student' ? 'bg-[#1a48ce] text-white' : 'text-gray-600'}`}
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        name="option"
                        checked={selectedOption === 'Student'}
                        onChange={() => setSelectedOption('Student')}
                      />
                      <span className="text-sm">Recruitment Partners</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className={`block w-full cursor-pointer p-3 ${selectedOption === 'University' ? 'bg-[#1a48ce] text-white' : 'text-gray-600'}`}
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        name="option"
                        checked={selectedOption === 'University'}
                        onChange={() => setSelectedOption('University')}
                      />
                      <span className="text-sm">Instituions</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full border focus:outline-none border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full border focus:outline-none border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full border focus:outline-none border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

              

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full border focus:outline-none border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full bg-[#1a48ce] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
