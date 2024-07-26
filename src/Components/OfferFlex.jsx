import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  ];
  return (
    // <div className='gri grid-cols-3 gap-3  '>
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      ></Swiper>
      <div className='flex justify-between bg-yello-900' key={item.id}>
        {item.map((item) => (
          <div className='w-80'>
            <SwiperSlide>
              <div className='px-10 py-10 rounded-lg border-2 shadow-lg'>
                <h1 className='text-sm font-bold mb-3'>{item.name}</h1>
                <p className='text-[13px]'>{item.description}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferFlex;
