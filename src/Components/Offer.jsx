import React from 'react';

const Offer = () => {
  const item = [
    {
      id: 1,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional durability and structural strength. Constructed from high-quality aluminium alloy, these sheets can withstands heavy rain, wind, and hail',
      background: '#4169e1',
    },
    // {
    //   id: 2,
    //   name: "METCOPO ALUMINIUM ROOFING SHEETS",
    //   description:
    //     "In the realm of roofing materials, Metcopoaluminium roofing sheets stand out for their elegant design, durability, and versatility. Designed to mimic the appearance of traditional clay tiles while offering the benefits of aluminium, Metcopo sheets have become a popular choice for residential and commercial projects in Nigeria.These sheets feature a unique profile with deep grooves and raised ridges, creating a visually appealing pattern that adds dimension and character to the roof.",
    //   background: "#4169e1",
    // },
    // {
    //   id: 3,
    //   name: "LONG SPAN ALUMINIUM ROOFING SHEETS",
    //   description:
    //     "Long span aluminium roofing sheets are known for their exceptional durability and exceptional durability and structural strength. Constructed from high-quality aluminium alloy, these sheets can withstands heavy rain, wind, and hail",
    //   background: "#4169e1",
    // },
  ];
  return (
    <div className='grid grid-cols-3 gap-3 mx-20   my-10 '>
      {item.map((item) => (
        <div className='px-10 py-10 rounded-lg border-2 shadow-lg' key={item.id}>
          <h1 className='text-sm font-bold mb-3'>{item.name}</h1>
          <p className='text-[13px]'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Offer;
