"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname()
  console.log(pathName)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#ffffff00] relative  top-0 z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-1 lg:px-8">
        <div className="flex justify-between  items-center h-20">
          <div className="flex-shrink-0">
            <Image src="/newLogo.png"  width={200} height={200} alt=""/>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="." className={`${pathName === '/countries' && 'text-white'} font-bold hover:text-blue-600 text-white`}>Countries</Link>
            <Link href="/students" className={`font-bold ${pathName === '/students' ?"text-white":"text-black"} hover:text-blue-600 text-white`}>Students</Link>
            <Link href="/RecruitmentPartners" className={` font-bold   ${pathName === '/RecruitmentPartners'?"text-white":"text-black"} hover:text-blue-600 text-white`}>Recruitment Partners</Link>
            <Link href="/institutions" className={ `font-bold ${pathName === '/institutions'?"text-[#1a48ce]":"text-black"} hover:text-blue-600 text-white`}>Institutions</Link>
            <Link href="/contact" className={`font-bold hover:text-blue-600 ${pathName === '/contact'?"text-white":"text-black"} text-white`}>Contact Us</Link>
            <Link href="/demo" className={`font-bold hover:text-blue-600 ${pathName === '/demo'?"text-white":"text-black"} text-white`}>Demo</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="space-y-2 py-4 px-4">
            <Link href="#" className="block text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="#" className="block text-gray-800 hover:text-blue-600">About</Link>
            <Link href="#" className="block text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="#" className="block text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
