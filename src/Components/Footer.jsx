'use client';
import React from 'react';
// import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const li = [
    {
      id: 1,
      list: 'HOME',
      link: '/',
    },
    {
      id: 2,
      list: 'ABOUT US',
      link: 'About',
    },
    {
      id: 3,
      list: 'SERVICES',
      link: '/',
    },
    {
      id: 4,
      list: 'GALLERY',
      link: '/',
    },
    {
      id: 5,
      list: 'CONTACT US',
      link: '/',
    },
  ];
  return (
    <>
      <footer className='bg-gray-100 py-10 md:py-16'>
        <div className='container max-w-screen-xl mx-auto px-4'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='text-center lg:text-left mb-10 lg:mb-0'>
              <div className='flex justify-center lg:justify-start mb-5'>
                <img src='images/logo.png' alt='Logo img' className='w-32 md:-80 lg:w-ful' />
              </div>

              <p className='font-light text-gray-400 text-xl mb-10'>Get your dream house with</p>

              <div className='flex items-center justify-center lg:justify-start space-x-5'>
                <a
                  href='#'
                  className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500'
                >
                  <i data-feather='facebook'></i>
                </a>

                <a
                  href='#'
                  className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500'
                >
                  <i data-feather='twitter'></i>
                </a>

                <a
                  href='#'
                  className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500'
                >
                  <i data-feather='linkedin'></i>
                </a>
              </div>
            </div>

            <div className='text-center lg:text-left mb-10 lg:mb-0'>
              <h4 className='font-semibold text-gray-900 text-2xl mb-6'>Useful links</h4>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Home
              </a>

              <a
                href='/services'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Features
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Gallery
              </a>

              <a
                href='/contact'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Book a meeting
              </a>
            </div>

            {/* <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-2xl mb-6">
                Landing
              </h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Mobile App
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Property
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Personal Website
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Web Developer
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Online Course
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Donation
              </a>
            </div> */}

            <div className='text-center lg:text-left'>
              <h4 className='font-semibold text-gray-900 text-2xl mb-6'>Utility</h4>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                FAQ
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
