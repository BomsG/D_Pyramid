"use client";
import React, { useState, useEffect } from "react";
import { Ellipsis, Ripple } from "react-css-spinners";

const loading = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(true);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="flex justify-center h-[100vh] items-center">
      {loading && <Ripple color="#000000" size={40} />}
    </div>
  );
};

export default loading;
