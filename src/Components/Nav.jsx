"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { motion } from "framer-motion";
import Link from "next/link";

const nav = () => {
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
    <div>
      <nav className="flex justify-between items-center bg-white text-black px-10 py-3 rounded-md">
        <Image src={logo} alt="logo" className="w-[10%]" />
        <ul className="flex gap-6  ">
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
      </nav>
    </div>
  );
};

export default nav;
