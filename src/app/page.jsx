"use client";
import React, { useRef } from "react";
import Footer from "@/Components/Footer";
import Nav from "../Components/Nav";
import Gallery from "../app/Gallery/page";
import Image from "next/image";
import bg from "../../public/images/herotrial.jpeg";
import PageWrapper from "@/Components/PageWrapper";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

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
      <div>
        <div>
          {/* <!-- home section --> */}
          <section className="bg-white mb-20 md:mb-52 xl:mb-72 px-5 md:px-[100px]">
            <div className="container max-w-screen-xl mx-auto px-4">
              <Nav />
              <div className="flex items-center justify-center xl:justify-start">
                <div className="mt-28 text-center xl:text-left">
                  <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-normal mb-6">
                    Endless Choices <br /> Of Roofing With Us
                  </h1>

                  <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12">
                    Our watchword is to provide quality y service and{" "}
                    <br className="hidden md:block" /> customized solution
                  </p>
                  <Link href="/Contact">
                    <button className="px-6 py-4 bg-[#3D95D1] text-white font-semibold text-lg rounded-xl hover:bg-gray-400 transition ease-in-out duration-500">
                      Contact us
                    </button>
                  </Link>
                </div>

                <div className="hidden xl:block xl:absolute z-0 top-0 right-0">
                  {/* <img src="assets/image/home-img.png" alt="Home img" /> */}
                  <Image src={bg} alt="Home img" />
                </div>
              </div>
            </div>
            {/* <!-- container.// --> */}
          </section>
          {/* <!-- home section //nd --> */}

          {/* <!-- feature section --> */}
          <section className="bg-white py-10 md:py-16 xl:relative">
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
                  <img src="assets/image/feature-img.png" alt="Feature img" />
                </div>

                <div className="">
                  <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                    Choice of various types of <br /> Roofs
                  </h1>

                  <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
                    Providing trendy up to date models of roofing to satisfy
                    customers.
                  </p>

                  <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                    <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                      <i
                        data-feather="check-circle"
                        className=" text-green-900"
                      ></i>
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
                    <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                      <i data-feather="lock" className=" text-green-900"></i>
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
                    <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                      <i
                        data-feather="credit-card"
                        className=" text-green-900"
                      ></i>
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
            {/* <!-- container.// --> */}
          </section>
          {/* <!-- feature section //end --> */}

          <Gallery />

          <section className="bg-white py-10 md:py-16 md:px-20">
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
              <p className="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6">
                Testimonial
              </p>

              <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14">
                What People Say <br /> About
              </h1>

              <div className="hidden xl:block xl:absolute top-0">
                <img src="assets/image/testimoni-1.png" alt="Image" />
              </div>

              <div className="hidden xl:block xl:absolute top-32">
                <img src="assets/image/testimoni-2.png" alt="Image" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-8 lg:space-x-12 mb-10 md:mb-20 mx-5">
                <div className="bg-gray-100 rounded-lg mb-10 md:mb-0 w-[400px] h-[40%]">
                  <img
                    src="assets/image/testimoni-3.png"
                    alt="Image"
                    className="mx-8 my-8"
                  />

                  <div className="flex items-center gap-5 mx-8">
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                  </div>

                  <p className="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8 ">
                    I recommend anyone to buy their <br /> building materials
                    here, I received <br /> great customer service <br /> from
                    the specialists who helped me.
                  </p>

                  <h3 className="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">
                    Brooklyn Simmons
                  </h3>
                </div>

                <div className="bg-gray-100 rounded-lg mb-10 md:mb-0 w-[400px] h-[40%]">
                  <img
                    src="assets/image/testimoni-4.png"
                    alt="Image"
                    className="mx-8 my-8"
                  />

                  <div className="flex items-center gap-5 mx-8">
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                    <i data-feather="star" className="text-yellow-500"></i>
                  </div>

                  <p className="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8 ">
                    they are the best people here, here, I <br /> received great
                    customer service <br /> from the specialists who helped me.
                  </p>

                  <h3 className="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">
                    Ralph Edwards
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
              <div className="bg-[#3D95D1] flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">
                <div className="text-center lg:text-left mb-10 lg:mb-0">
                  <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
                    Talk to us <br /> to discuss
                  </h1>

                  <p className="font-normal text-white text-md md:text-xl">
                    Need more time to discuss? Won’t worry, we are <br /> ready
                    to help you. You can fill in the column on the <br /> right
                    to book a meeting with us. Totally free.
                  </p>
                </div>

                <div className="hidden xl:block xl:absolute right-0">
                  <img src="assets/image/book.png" alt="Image" />
                </div>

                <div className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl">
                  <div className="py-3">
                    <h3 className="font-semibold text-gray-900 text-3xl">
                      Book a meeting
                    </h3>
                  </div>

                  <div className="py-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                    />
                  </div>

                  <div className="py-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                    />
                  </div>

                  <div className="py-3 relative">
                    <input
                      type="text"
                      placeholder="Date"
                      className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
                    />

                    <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                      <i data-feather="calendar"></i>
                    </div>
                  </div>

                  <div className="py-3 relative">
                    <input
                      type="text"
                      placeholder="Virtual Meeting"
                      className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                    />

                    <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                      <i data-feather="chevron-down"></i>
                    </div>
                  </div>

                  <div className="py-3">
                    <button className="w-full py-4 font-semibold text-lg text-white bg-[#3D95D1] rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </PageWrapper>
  );
}
