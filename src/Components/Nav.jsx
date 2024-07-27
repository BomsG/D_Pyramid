"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
      link: "/services",
    },
    {
      id: 4,
      list: "GALLERY",
      link: "/Gallery",
    },
    {
      id: 5,
      list: "CONTACT US",
      link: "/Contact",
    },
  ];
  return (
    <div className="mt-10">
      <nav
        className="flex justify-between items-center bg-white text-black px-10 py-3 rounded-md xl:relative z-10"
        x-data="{navbarOpen:false}"
      >
        <Image src={logo} alt="logo" className="w-[20%] md:w-[10%]" />
        <ul className="hidden md:flex gap-6 ">
          {li.map((li) => (
            <li
              key={li.id}
              className="text-[15px] font-bold tracking-widest hover:bg-blue-500 hover:text-white  px-3 py-2 "
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0.2 }}
              >
                <Link href={li.link}>{li.list}</Link>
              </motion.div>
            </li>
          ))}
        </ul>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center p-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none "
          >
            {isOpen ? (
              <MdOutlineRestaurantMenu className="w-6 h-6" color="black" />
            ) : (
              <CiMenuFries className="w-6 h-6" />
            )}
          </button>

          <div
            className={`absolute right-0 w-48 mt-2 py-2 bg-white border rounded-md shadow-xl ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul>
              {li.map((li) => (
                <li
                  key={li.id}
                  className="text-[15px] font-bold tracking-widest hover:bg-blue-500 hover:text-white  px-3 py-2 "
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href={li.link}>{li.list}</Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
