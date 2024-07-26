import React from 'react';

const Offer2 = () => {
  const item = [
    {
      id: 1,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional durability and structural strength. Constructed from high-quality aluminium alloy, these sheets can withstands heavy rain, wind, and hail',
      background: '#4169e1',
    },
    {
      id: 2,
      name: 'METCOPO ALUMINIUM ROOFING SHEETS',
      description:
        'In the realm of roofing materials, Metcopoaluminium roofing sheets stand out for their elegant design, durability, and versatility. Designed to mimic the appearance of traditional clay tiles while offering the benefits of aluminium.',
      background: '#4169e1',
    },
    {
      id: 3,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional durability and structural strength. Constructed from high-quality aluminium alloy, these sheets can withstands heavy rain, wind, and hail',
      background: '#4169e1',
    },
  ];
  return (
    <div className='flex justify-between'>
      {item.map((item) => (
        <div className=''>
          <div className='w-80  bg-white rounded-lg shadow-lg'>
            <img
              className='rounded-t-lg w-80 h-46'
              src='https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80'
              alt=''
            />
            <div className='py-4 px-8'>
              <h1 className='hover:cursor-pointer mt-2 text-gray-900 font-bold text-md tracking-tight'>
                {item.name}
              </h1>
              <p className='hover:cursor-pointer py-3 text-gray-600 text-sm  leading-6'>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer2;
