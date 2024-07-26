"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Nav from "../Components/Nav";
import bg from "../../public/images/bg2.jpeg";
import Mission from "@/Components/Mission";
import socials from "../../public/images/vision.jpeg";
import vision from "../../public/images/hero3.jpeg";
import hero from "../../public/images/herotrial.jpeg";
import hero4 from "../../public/images/hero4.jpeg";
import hero5 from "../../public/images/hero5.jpeg";
import hero6 from "../../public/images/hero6.jpeg";
import PageWrapper from "@/Components/PageWrapper";
import Footer from "@/Components/Footer";
import Offer from "@/Components/Offer2";

// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });

import { useScroll, motion, useTransform } from "framer-motion";
import OfferFlex from "@/Components/OfferFlex";
const home = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <div className="bg-[#F8F8F8]">
      <PageWrapper>
        <div className=" text-white bg-gray-900  " ref={ref}>
          <div
            className=" bg-cover bg-center opacity-40 w-full h-[100vh] blur-sm "
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
          <div className="absolute inset-0  bg-opacity-50 px-20 py-10 h-[500px]">
            <Nav />
            <div className="flex justify-center h-full items-center text-center mt-10">
              <div className="w-[800px]">
                <h2 className="text-[65px] font-bold tracking-wider leading-[80px]">
                  Endless Choices Of Roofing With Us
                </h2>
                <h3 className="text-[14px] tracking-wide my-5">
                  Providing trendy up to date models of roofing to satisfy
                  customers.
                </h3>
                <button className="bg-blue-500  py-3 px-10 text-sm rounded-xl  tracking-widest">
                  VIEW WORKS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-[300px] text-white flex px-[100px] pt-[100px]  ">
          <motion.div
            className="flex justify-center gap-10 mb-5"
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: scaleOpacity,
            }}
          >
            <div className="w-full">
              <Image src={hero6} alt="hero" className="h-[400px]" />
              <div className="ml-10 mt-10">
                <p className="text-black">
                  We conduct our relationship with all our clients and business
                  partner based on principle and sustain ability, mutual trust
                  and integrity upholding our reputation in any condition.
                </p>
                <div className=" flex gap-5 text-[16px] tracking-wide py-5 ">
                  <button className="bg-blue-600 text-white font-bold px-5 py-2">
                    Get in Touch
                  </button>
                  <button className="border border-black text-black font-bold px-5 py-2">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-bold tracking-wider leading-7 ">
                Exceptional quality that <br /> cant be beaten
              </h1>
              <p className="text-sm tracking-wider my-5">
                Our watchword is to provide quality service and customized
                solution to our valued clients both public and private sector.
              </p>
              <Image src={hero4} alt="hero" className="h-[500px]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-[550px]">
          <Offer />
        </div>

        <div className="mx-28 my-20">
          {/* <Mission /> */}

          <hr className="my-10" />
        </div>

        <div className="mt-[140px] px-[100px]">
          <OfferFlex />
        </div>

        <div className="mx-28 my-20">
          <Mission />

          <hr className="my-10" />
        </div>
        <Footer />
      </PageWrapper>
    </div>
  );
};

export default home;
