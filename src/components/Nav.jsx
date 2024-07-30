"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);
  const li = [
    {
      id: 1,
      list: "Home",
      link: "/",
    },
    {
      id: 2,
      list: "About Us",
      link: "/about",
    },
    {
      id: 3,
      list: "Services",
      link: "/services",
    },
    {
      id: 4,
      list: "Gallery",
      link: "/gallery",
    },
    {
      id: 5,
      list: "Contact",
      link: " https://wa.me/+2349164707805?text=I'm interested in your service",
    },
  ];
  return (
    <div className="fixed top-0 md:top-6 w-screen bg-yello-500 z-[99] px-0 md:px-4 lg:px-24 xl:px-52 py-2">
      <nav className="flex justify-between items-center py-2 px-2 md:px-8 rounded-md bg-white shadow-lg">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Logo img"
            width={128}
            height={46}
          />
        </Link>
        <ul className="hidden md:flex gap-4 ">
          {li.map((al) => (
            <Link href={al.link} key={al.id}>
              <li
                className={`text-[15px] font-medium px-3 py-2 ${
                  activeLink === al.id
                    ? " text-blue-500 rounded-md"
                    : "hover:bg-blue-500 hover:text-white hover:rounded-md"
                }`}
                onClick={() => setActiveLink(al.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 0.2 }}
                >
                  {al.list}
                </motion.div>
              </li>
            </Link>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="flex items-center md:hidden  p-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none "
        >
          {isOpen ? (
            <IoCloseOutline className="w-6 h-6" color="black" />
          ) : (
            <CiMenuFries className="w-6 h-6" />
          )}
        </button>

        <div
          className={`absolute md:hidden top-20 right-0 h-screen w-full bg-white ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="mt-8">
            {li.map((li) => (
              <li
                key={li.id}
                onClick={closeMenu}
                className="text-[15px] text-center font-medium tracking-wide hover:bg-blue-500 hover:text-white  px-3 py-3"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 0.4 }}
                >
                  {" "}
                  <Link href={li.link}>{li.list}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
