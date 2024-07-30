import React from "react";
import { MdOutlineRoofing } from "react-icons/md";

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
      name: "LONG SPAN ALUMINIUM ROOFING SHEETS",
      description:
        "Long span aluminium roofing sheets are known for their exceptional durability and exceptional durability and structural strength.",
    },
  ];
  return (
    <div className="my-20 mx-20">
      <h1 className="text-center text-2xl my-10">Services</h1>
      <div className="grid grid-cols-3 gap-2">
        {item.map((item) => (
          <div key={item.id} className="bg-white shadow-xl px-10 py-3">
            <h2 className="text-[14px] font-bold mb-5 tracking-wider">
              {item.name}
            </h2>
            <p className="text-sm tracking-wide">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
