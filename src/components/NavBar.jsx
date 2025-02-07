"use client"
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`bg-[#ffffff00] bg-white sticky top-0  z-50 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
    <div className="max-w-7xl mx-auto   ">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0">
          <Link href="/">     <img src="/newLogo.png" className="w-48" alt="Logo"/></Link>
     
        </div>
        <div className="hidden text-xl font-bold items-center tracking-[1px] md:flex space-x-8">
    <Link href="#countries" className="hover:border-b-4 hover:text-[#471ace] text-black transition-colors duration-300">Countries</Link>
    <Link href="/students" className={`hover:text-[#1a48ce] hover:border-b-4 border-[#4627e3] ${pathName === '/students' ? 'text-[#1a48ce] border-b-4 border-[#1a48ce]' : ''} text-black transition-colors duration-300`}>Students</Link>
    <Link href="/recruitment-partners" className={`hover:text-[#1a48ce] hover:border-b-4 border-[#1a48ce] ${pathName === '/recruitment-partners' ? 'text-[#1a48ce] border-b-4 border-[#1a48ce]' : ''} text-black transition-colors duration-300`}>Recruitment Partners</Link>
    <Link href="/institutions" className={`hover:text-[#1a48ce] hover:border-b-4 border-[#1a48ce] ${pathName === '/institutions' ? 'text-[#1a48ce] border-b-4 border-[#1a48ce]' : ''} text-black transition-colors duration-300`}>Institutions</Link>
    <Link href="/contact" className="hover:text-black text-white transition-colors duration-300">
        <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white border-2 border-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Contact</span>
        </button>
    </Link>
</div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {isOpen && (
      <div className="md:hidden bg-white border-t">
        <div className="space-y-2 py-4 px-4">
          <a href="/" className="block text-gray-800 hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="/about" className="block text-gray-800 hover:text-blue-600 transition-colors duration-300">About</a>
          <a href="/services" className="block text-gray-800 hover:text-blue-600 transition-colors duration-300">Services</a>
          <a href="/contact" className="block text-gray-800 hover:text-blue-600 transition-colors duration-300">Contact</a>
        </div>
      </div>
    )}
  </nav>
  );
}