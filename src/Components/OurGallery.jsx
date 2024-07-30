'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
// import img1 from '../../../public/images/aboutHero.jpeg';
// import img2 from '../../../public/images/herotrial.jpeg';
// import img3 from '../../../public/images/heroo.jpeg';
// import img4 from '../../../public/images/heroo1.jpeg';
// import img5 from '../../../public/images/hero4.jpeg';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function OurGallery() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.3'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className=''>
      <div className='container max-w-screen-xl mx-auto px-4'>
        {/* <h1 className='font-semibold text-gray-900 text-4xl text-center'>Our Gallery</h1> */}

        <section className=''>
          <div className='container max-w-screen-xl mx-auto px-4 xl:relative'>
            <h1 className='font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2'>
              Our Gallery
            </h1>
            <p className='font-normal text-gray-400 text-lg md:text-xl text-center mb-6'>
              We&apos;re exceptional at what we do
            </p>
          </div>
        </section>

        <motion.div
          className='flex space-x-4 md:space-x-6 lg:space-x-8'
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: scaleOpacity,
          }}
        >
          <div>
            <img
              //   src={img5}
              src='/images/aboutHero.jpeg'
              alt='image'
              className='mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500 w-[400px] h-[30%]'
            />
            <img
              //   src={img2}
              src='/images/herotrial.jpeg'
              alt='image'
              className='hover:opacity-75 transition ease-in-out duration-500 w-[400px] h-[64%]'
            />
          </div>

          <div>
            <img
              //   src={img3}
              src='/images/heroo.jpeg'
              alt='image'
              className='mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500 w-[400px] h-[30%]'
            />
            <img
              //   src={img4}
              src='/images/heroo1.jpeg'
              alt='image'
              className='mb-3 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500 w-[400px] h-[30%]'
            />
            <img
              src='assets/image/gallery-6.png'
              alt='image'
              className='hover:opacity-75 transition ease-in-out duration-500'
            />
          </div>

          <div>
            <img
              //   src={img1}
              src='images/hero4.jpeg'
              alt='image'
              className='mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500 w-[400px] h-[64%]'
            />
            <img
              src='assets/image/gallery-7.png'
              alt='image'
              className='hover:opacity-75 transition ease-in-out duration-500'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}