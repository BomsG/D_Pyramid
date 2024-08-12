import React from "react";
import { MdOutlineRoofing } from "react-icons/md";
import Link from "next/link";

const Services = () => {
  const item = [
    {
      id: 1,
      name: "LONG SPAN ALUMINIUM ROOFING SHEETS",
      description:
        "Long span aluminium roofing sheets are known for their exceptional durability and exceptional durability and structural strength. ",
    },
    {
      id: 2,
      name: "METCOPO ALUMINIUM ROOFING SHEETS",
      description:
        "In the realm of roofing materials, Metcopoaluminium roofing sheets stand out for their elegant design, durability, and versatility.",
    },
    {
      id: 3,
      name: "CORRUGATED ALUMINIUM ROOFING SHEETS",
      description:
        "Corrugated aluminium roofing sheets refers tocorrugated galvanized steel sheets used forroofing",
    },
  ];
  return (
    <div className="my-20 mx-10 md:mx-20">
      <div className="my-10">
        <h1 className="text-center text-3xl font-bold tracking-wider">
          Services
        </h1>
        <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center ">
          Providing premium roofing solutions with unparalleled craftsmanship
          and durability. Your trusted partner for long-lasting and
          aesthetically pleasing roofs.
        </p>
      </div>

      <div className="block md:grid md:grid-cols-3 gap-3 ">
        {item.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-xl px-10 py-10 hover:bg-blue-500 hover:rounded-md hover:text-white my-3 transition ease-in-out duration-700 "
          >
            <MdOutlineRoofing color="blue" className="w-[40px] h-[40px] mb-3" />
            <h2 className="text-[14px] font-bold mb-5 tracking-wider">
              {item.name}
            </h2>
            <p className="text-[13px] tracking-wide font-normal text-gray-500 hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <a
        href="/services"
        className="text-blue-500 flex justify-center hover:text-blue-300"
      >
        See more
      </a>
    </div>
  );
};

export default Services;
