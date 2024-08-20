"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScroll, motion, useTransform } from "framer-motion";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-arrow slick-prev"
    style={{
      left: "10px",
      zIndex: 1,
      background: "rgba(0,0,0,0.5)",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    &#9664;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-arrow slick-next"
    style={{
      right: "10px",
      zIndex: 1,
      background: "rgba(0,0,0,0.5)",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    &#9654;
  </button>
);

export default function OurGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust breakpoint for tablets and larger screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices, use the default settings
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="w-full">
      <div className="container max-w-screen-xl mx-auto px-4">
        <section className="mt-12">
          <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
            <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2">
              Our Gallery
            </h1>
            <p className="font-normal text-gray-400 text-lg md:text-xl text-center">
              We&apos;re exceptional at what we do
            </p>
          </div>
        </section>

        <motion.div
          className="relative " // Ensure container is positioned for arrow positioning
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: scaleOpacity,
          }}
        >
          <Slider {...settings}>
            <div>
              <img
                src="/images/roof1.jpg"
                alt="Gallery Image 1"
                className="w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500"
              />
            </div>
            <div>
              <img
                src="/images/roof3.jpg"
                alt="Gallery Image 2"
                className="w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500"
              />
            </div>
            <div>
              <img
                src="/images/roof4.jpeg"
                alt="Gallery Image 3"
                className="w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500"
              />
            </div>
            <div>
              <img
                src="/images/roof5.jpeg"
                alt="Gallery Image 4"
                className="w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500"
              />
            </div>
            <div>
              <img
                src="/images/roof6.jpg"
                alt="Gallery Image 5"
                className="w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
