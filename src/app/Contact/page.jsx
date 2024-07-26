import React from "react";
import Nav from "../../Components/Nav";

import Link from "next/link";

const page = () => {
  return (
    <>
      <Nav />
      <div className="   p-5 md:p-20  flex justify-center h-[100vh] items-center">
        <div className=" bg-[#FAF9F6]  rounded-xl shadow-2xl w-[80%] md:w-[50%]">
          <div className="px-5 md:px-20 py-10">
            <h1 className="text-3xl font-bold text-center my-5 tracking-wider underline underline-offset-8 decoration-blue-500">
              Contact us
            </h1>

            <form className="w-full my-5">
              <input
                type="name"
                placeholder="Enter your name"
                className="w-full px-5 py-2 text-sm border rounded-md text-black bg-slate-200 border-gray-500"
              />
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full my-5 px-5 py-2 text-sm rounded-md text-black bg-slate-200 border border-gray-500"
              />
              <br />
              <textarea
                className="w-full text-black px-5 py-10 text-sm rounded-md  bg-slate-200 border border-gray-500"
                placeholder="Message"
              />
              <div className="flex justify-center my-10">
                <button className="bg-blue-600 text-white px-10 py-2 rounded-md ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
