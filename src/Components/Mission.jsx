"use client";
import React from "react";
import Image from "next/image";
import hero from "../../public/images/hero.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className=" my-20">
      <div>
        <h1 className="text-3xl tracking-wider font-bold underline underline-offset-8 decoration-blue-500 ">
          Our Mission
        </h1>
        {/* <h2 className="bg-blue-500 mt-3  py-[4px] px-1 w-[18%] text-sm text-white tracking-wide font-bold">
          Who We Are, What We Do
        </h2> */}
        <div className=" text-[16px] tracking-wider leading-7 flex justify-center items-center gap-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <p>
              D-Pyramid vision is a unique extension of cutting edge servicing
              company that focus on Stone coated roof tiles, Aluminium roofing
              sheets, steel Structure water collectors, felt and supply of
              cement and iron rods ranging from residential, organization and
              commercial properties.
            </p>
            <Link href="/About">
              <button className="text-blue-600 font-bold bg-none text-sm rounded-xl  tracking-widest">
                Read more
              </button>
            </Link>
          </motion.div>
          <Image src={hero} alt="hero" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
