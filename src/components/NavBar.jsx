import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='text-gray-500 fixed bg-[#151515] w-full z-10'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <p className="cursor-pointer transition duration-200 ease-in-out text-white text-md font-medium">
                  Accueil
                </p>
                <p className="cursor-pointer transition duration-200 ease-in-out text-gray-400 hover:text-white text-md font-medium">
                  Compétences
                </p>
                <p className="cursor-pointer transition duration-200 ease-in-out text-gray-400 hover:text-white text-md font-medium">
                  Expériences
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="https://www.linkedin.com/in/fiona-petillon-76b134201/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-900 bg-gray-900 border border-gray-100 rounded-full p-2 mx-2 hover:bg-gray-100 transition duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:petillon.fiona@gmail.com"
              className="text-gray-100 hover:text-gray-900 bg-gray-900 border border-gray-100 rounded-full p-2 mx-2 hover:bg-gray-100 transition duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Accueil
            </p>
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Compétences
            </p>
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Expériences
            </p>
        </div>
      </div>
    </nav>
            );
            };

export default Navbar;
