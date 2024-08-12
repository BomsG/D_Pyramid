"use client";
import Image from "next/image";
import React from "react";
// import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import WhatsAppLink from "./whatsappLink";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="!bg-[#1e1e1e] px-5 md:px-4 lg:px-24 xl:px-30 py-10 md:py-16 [&_p]:text-white [&_a]:text-white [&_p]:text-[16px] [&_a]:text-[16px]">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between sm:gap-20 gap-4">
            <div className=" text-left mb-10 lg:mb-0">
              <div className="flex justify-start mb-5">
                <Image
                  src="/images/logo2.png"
                  alt="Logo img"
                  width={128}
                  height={46}
                />
              </div>

              <p className="font-light text-gray-400 text-xl mb-10">
                Get your dream house with
              </p>

              <div className="flex items-center  justify-start space-x-5">
                <a
                  href={` https://wa.me/+2349164707805?text=I'm interested in your service`}
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500"
                >
                  <FaWhatsapp color="black" />
                </a>

                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500"
                >
                  <MdOutlineMailOutline color="black" />
                </a>

                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500"
                >
                  <FaFacebook color="black" />
                </a>
              </div>
            </div>

            <div className="text-left mb-3 lg:mb-0">
              <h4 className="font-semibold text-white text-[16px] ">
                Quick links
              </h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl my-3 hover:text-blue-800 transition ease-in-out duration-300"
              >
                Home
              </a>

              <a
                href="/services"
                className="block font-light text-gray-400 text-xl  hover:text-blue-800 transition ease-in-out duration-300"
              >
                Features
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl my-3 hover:text-blue-800 transition ease-in-out duration-300"
              >
                Gallery
              </a>

              <a
                href="/contact"
                className="block font-light text-gray-400 text-xl  hover:text-blue-800 transition ease-in-out duration-300"
              >
                Book a meeting
              </a>
            </div>

            <div className="text-left mb-2 lg:mb-0">
              <h4 className="font-semibold text-white text-md mb-6">Socials</h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-blue-800 transition ease-in-out duration-300"
              >
                Facebook
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-6 hover:text-blue-800 transition ease-in-out duration-300"
              >
                Instagram
              </a>

              {/* <a
                href="#"
                className="block font-light text-gray-400 text-xl mb-3 hover:text-gray-800 transition ease-in-out duration-300"
              >
                Linkedin
              </a> */}
            </div>

            <div className="text-left">
              <h4 className="font-semibold text-white text-md ">Contact us</h4>

              <p
                href="#"
                className=" font-light text-gray-400 text-xl my-3 flex gap-2 items-center"
              >
                <IoLocationSharp size={20} /> Plot 12/14 Korstin Muller, Idu
                Industrial Layout, FCT- Abuja
              </p>

              <a
                href="#"
                className=" font-light text-gray-400 text-xl flex gap-2 items-center "
              >
                <IoCall size={20} />
                +234 916 470 7805
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
