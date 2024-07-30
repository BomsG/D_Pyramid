'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/swiper.css';

const OfferFlex = () => {
  const item = [
    {
      id: 1,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional ',
      background: '#4169e1',
    },
    {
      id: 2,
      name: 'METCOPO ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional ',
      background: '#4169e1',
    },
    {
      id: 3,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional ',
      background: '#4169e1',
    },
    {
      id: 4,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional ',
      background: '#4169e1',
    },
    {
      id: 4,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional ',
      background: '#4169e1',
    },
    {
      id: 4,
      name: 'LONG SPAN ALUMINIUM ROOFING SHEETS',
      description:
        'Long span aluminium roofing sheets are known for their exceptional durability and exceptional ',
      background: '#4169e1',
    },
  ];

  return (
    // <div className='gri grid-cols-3 gap-3  '>
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={36}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        grabCursor={true}
        loop
        autoplay
      >
        <>
          {item.map((item) => (
            <SwiperSlide key={item.key} className='bg-orang-600 '>
              <div className='w-[350px] h-[250px] flex items-center px-10 py-10 rounded-lg border-2 bg-white'>
                <div className='flex flex-col'>
                  <div className='flex justify-center items-center rounded-full overflow-hidden w-12 h-12'>
                    <Image
                      src='https://plus.unsplash.com/premium_photo-1693000696650-e73643956033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='avatar'
                      height={60}
                      width={60}
                      objectFit='contain'
                    />
                  </div>
                  <h1 className='text-sm font-bold mb-3'>{item.name}</h1>
                  <p className='text-[13px]'>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default OfferFlex;
