"use client";
import React, { useRef } from "react";
// import Image from 'next/image';
import PageWrapper from "@/components/PageWrapper";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import { MdSecurity, MdSupport, MdSupportAgent } from "react-icons/md";
import OurGallery from "@/components/OurGallery";
import Services from "@/components/Services";

export default function Home() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <PageWrapper>
      <div className="">
        <section
          className="w-full h-[80vh] md:h-[100vh] backdrop-blur-sm"
          style={{
            backgroundImage: "url('/images/Simg3.png')",
            backgroundSize: "cover",

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
          }}
        >
          {/* <div className='container flex items-center max-w-screen-xl mx-auto px-4'> */}
          <div className="w-full pt-[10rem] md:pt-[15rem] px-2 md:px-52 ">
            <div className="flex items-center justify-center xl:justify-start">
              <div className="text-center xl:text-left">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl text-white leading-normal mb-3 md:mb-6  ">
                  Endless Choices <br /> Of Roofing With Us
                </h1>

                <p className="font-normal text-sm sm:text-xl text-white leading-relaxed mb-12">
                  Our watchword is to provide quality service and{" "}
                  <br className="hidden md:block" /> customized solution
                </p>

                <Link href={` https://wa.me/+2349164707805?text=hello`}>
                  <button className="px-6 py-4 bg-[#3D95D1] text-white font-semibold text-lg rounded-xl hover:bg-gray-400 transition ease-in-out duration-500">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- feature section --> */}
        <section className="bg-white sm:py-20 md:py-16 xl:relative">
          <motion.div
            className="container max-w-screen-xl mx-auto px-4"
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: scaleOpacity,
            }}
          >
            <div className="flex flex-col xl:flex-row justify-end">
              <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                <img
                  src="images/roof2.jpg"
                  alt="Feature img"
                  className="w-[600px] h-[800px] object-fit"
                />
              </div>

              <div className="">
                <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl sm:text-left text-center leading-normal mb-6">
                  Choice of various types of <br /> Roofs
                </h1>

                <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
                  Providing trendy up to date models of roofing to satisfy
                  customers.
                </p>

                <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                  <div className="w-20 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                    <MdSecurity size={40} />
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                      Best Roof Guarantee
                    </h4>
                    <p className="font-normal text-gray-400 text-xl leading-relaxed">
                      We guarantees you quality roofing materials
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                  <div className="w-20 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                    <MdSupport size={40} />
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                      Safe Transaction
                    </h4>
                    <p className="font-normal text-gray-400 text-xl leading-relaxed">
                      Your transactions will always be safe and fast
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
                  <div className="w-20 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                    <MdSupportAgent size={40} />
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                      Good Customer Service
                    </h4>
                    <p className="font-normal text-gray-400 text-xl leading-relaxed">
                      We proive professionalism, and <br /> good customer
                      service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <OurGallery />
        <Services />
      </div>
    </PageWrapper>
  );
}
