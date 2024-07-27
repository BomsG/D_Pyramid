import Nav2 from '@/Components/Nav2';
import React from 'react';

export default function Services() {
  return (
    <div>
      <Nav2 />

      <section className='py-14 lg:py-24 relative z-0 bg-gray-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center'>
          <h1 className='max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal'>
            Control your Finances with our <span className='text-indigo-600'>Smart Tool </span>
          </h1>
          <p className='max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9'>
            Invest intelligently and discover a better way to manage your entire wealth easily.
          </p>
        </div>
      </section>

      <section className='py-14 lg:py-24 relative'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div className='img-box'>
              <img
                src='https://pagedone.io/asset/uploads/1702034769.png'
                alt='About Us tailwind page'
                className='max-lg:mx-auto'
              />
            </div>
            <div className='lg:pl-[100px] flex items-center'>
              <div className='data w-full'>
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative'>
                  About Us
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Driven by a passion for seamless user experiences, we've meticulously curated
                  pagedone to empower creators, designers, and developers alike. Our mission is to
                  provide a comprehensive toolkit, enabling you to build intuitive, beautiful
                  interfaces that resonate with users on every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-14 lg:py-24 relative'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-9'>
            <div className='lg:pr-24 flex items-center'>
              <div className='data w-full'>
                <img
                  src='https://pagedone.io/asset/uploads/1702034785.png'
                  alt='About Us tailwind page'
                  className='block lg:hidden mb-9 mx-auto'
                />
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center'>
                  We are Creative Since 2005
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Pagedone isn&apos;t just a collection of components and guidelines; it's a
                  philosophy. We go beyond aesthetics, prioritizing accessibility, scalability, and
                  usability. Every element, from the tiniest detail to the grandest layout, is
                  meticulously crafted to enhance functionality and elevate user satisfaction.
                </p>
              </div>
            </div>
            <div className='img-box'>
              <img
                src='https://pagedone.io/asset/uploads/1702034785.png'
                alt='About Us tailwind page'
                className='hidden lg:block'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-14 lg:py-24 relative'>
        <div className='p-8 bg-white'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Enjoy the finest features with Our Protfolio
            </h2>
            <p className='text-gray-600 mb-8'>
              Unlock the door to your dream home – a sanctuary where cherished moments unfold and
              memories are built. Your house, not just a property, but a canvas for a life
              well-lived.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='relative'>
              <img
                src='path-to-image'
                alt='Minimalist Family House'
                className='w-full h-full object-cover rounded-lg shadow-md'
              />
              <div className='absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold rounded-lg'>
                <div className='text-center'>
                  <h3 className='text-xl'>Minimalist Family House</h3>
                  <p>$229.00</p>
                  <p>Sudirman Street, No.710, West Jakarta</p>
                </div>
              </div>
            </div>
            <img
              src='path-to-image'
              alt='House 2'
              className='w-full h-full object-cover rounded-lg shadow-md'
            />
            <img
              src='path-to-image'
              alt='House 3'
              className='w-full h-full object-cover rounded-lg shadow-md'
            />
            <img
              src='path-to-image'
              alt='House 4'
              className='w-full h-full object-cover rounded-lg shadow-md'
            />
            <img
              src='path-to-image'
              alt='House 5'
              className='w-full h-full object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
