"use client";
import React from "react";
import Image from "next/image";
import socials from "../../public/images/socials.jpeg";
import logo from "../../public/images/logo2.png";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const li = [
    {
      id: 1,
      list: "HOME",
      link: "/",
    },
    {
      id: 2,
      list: "ABOUT US",
      link: "About",
    },
    {
      id: 3,
      list: "SERVICES",
      link: "/",
    },
    {
      id: 4,
      list: "GALLERY",
      link: "/",
    },
    {
      id: 5,
      list: "CONTACT US",
      link: "/",
    },
  ];
  return (
    <>
      <div className="h-[200px]  bg-blue-600 text-white flex justify-center items-center">
        <div className="border border-black flex ">
          <input
            type="Email"
            placeholder="Email Here"
            className="px-5 py-3 outline-none border-none text-black  "
          />
          <button className="px-10 rounded-l-xl">Contact us</button>
        </div>
      </div>
      <div className="bg-black text-gray-300  px-20 py-10 ">
        <div className="flex justify-around items-center ">
          <div>
            <Image src={logo} alt="logo" className="w-[100px] " />
            <h2 className="text-sm my-5">TEL: +234 916 470 7805</h2>
            <h2 className="text-2xl font-bold ">Socials</h2>
            <div className="flex gap-5 mt-5">
              <FaFacebook />
              <FaWhatsapp />
              <FaInstagram />
            </div>
          </div>

          <nav className=" py-3 rounded-md">
            <ul className=" ">
              {li.map((li) => (
                <li
                  key={li.id}
                  className="text-[15px] font-bold tracking-widest leading-9"
                >
                  <Link href={li.link}>{li.list}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Email</h2>
            <div className=" flex gap-5 text-[16px] tracking-wide py-5 ">
              <button className="bg-blue-600 text-white font-bold px-5 py-2">
                Get in Touch
              </button>
              <button className="border px-5 py-2">Our Services</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
