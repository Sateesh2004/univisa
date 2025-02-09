"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-700 ease-in-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 -translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/newLogo.png" className="w-32 md:w-32" alt="Logo"/>
            </Link>
          </div>
          
          <div className="hidden text-xl md:text-xl font-bold items-center tracking-[1px] lg:flex space-x-4 lg:space-x-8">
            <Link 
              href="#countries" 
              className={`${pathName === '/institutions' || pathName === '/contact' ? 'invisible' : ''} relative group py-2 text-black transition-colors duration-300`}
            >
              <span>Countries</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#471ace] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
            
            <Link 
              href="/students" 
              className={`relative group py-2 text-black transition-colors duration-300 ${
                pathName === '/students' ? 'text-[#1a48ce]' : ''
              }`}
            >
              <span>Students</span>
              <span className={`absolute bottom-0 left-0 h-1 bg-[#1a48ce] transition-all duration-300 ease-in-out ${
                pathName === '/students' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              href="/recruitment-partners" 
              className={`relative group py-2 text-black transition-colors duration-300 ${
                pathName === '/recruitment-partners' ? 'text-[#1a48ce]' : ''
              }`}
            >
              <span>Recruitment Partners</span>
              <span className={`absolute bottom-0 left-0 h-1 bg-[#1a48ce] transition-all duration-300 ease-in-out ${
                pathName === '/recruitment-partners' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              href="/institutions" 
              className={`relative group py-2 text-black transition-colors duration-300 ${
                pathName === '/institutions' ? 'text-[#1a48ce]' : ''
              }`}
            >
              <span>Institutions</span>
              <span className={`absolute bottom-0 left-0 h-1 bg-[#1a48ce] transition-all duration-300 ease-in-out ${
                pathName === '/institutions' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link href="/contact" className="hover:text-black text-white transition-colors duration-300">
              <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white border-2 border-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-white   transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col bg-white  space-y-4 p-6">
          <Link 
            href="#countries"
            className={`text-2xl font-bold relative group py-2 text-black transition-all duration-300 transform hover:translate-x-2 ${
              pathName === '/institutions' || pathName === '/contact' ? 'hidden' : ''}`}
            onClick={toggleMenu}
          >
            <span className='hover:text-blue-600' >Countries</span>
            {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a48ce] group-hover:w-full transition-all duration-300"></span> */}
          </Link>
          
          <Link 
            href="/students"
            className="text-2xl font-bold relative group py-2 text-black transition-all duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            <span  className={`hover:text-blue-600 ${pathName === '/students' ? 'text-[#1a48ce]' : ''}`} >Students</span>
            {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a48ce] group-hover:w-full transition-all duration-300"></span> */}
          </Link>
          
          <Link 
            href="/recruitment-partners"
            className="text-2xl font-bold relative group py-2 text-black transition-all duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            <span className={`hover:text-blue-600 ${pathName === '/recruitment-partners' ? 'text-[#1a48ce]' : ''}`} >Recruitment Partners</span>
            {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a48ce] group-hover:w-full transition-all duration-300"></span> */}
          </Link>
          
          <Link 
            href="/institutions"
            className="text-2xl font-bold relative group py-2 text-black transition-all duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            <span className={`hover:text-blue-600 ${pathName === '/institutions' ? 'text-[#1a48ce]' : ''}`}>Institutions</span>
            {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a48ce] group-hover:w-full transition-all duration-300"></span> */}
          </Link>
          
          <Link 
            href="/contact"
            className="mt-4 hover:text-black"
            onClick={toggleMenu}
          >
            <button className="h-[50px] w-40 relative flex hover:text-black   items-center justify-center overflow-hidden bg-gray-800 text-white text-shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white border-2 border-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
              <span className="relative  z-10">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}