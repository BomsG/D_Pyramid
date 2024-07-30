import PageWrapper from '@/Components/PageWrapper';
import Nav from '../../Components/Nav';
import { CiLocationOn } from 'react-icons/ci';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <PageWrapper>
      <div className='mt-32 mb-32'>
        <section className='py-10 md:py-16'>
          <div className='container max-w-screen-xl mx-auto px-4 xl:relative'>
            <h1 className='font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2'>
              Contact Us
            </h1>
            <p className='font-normal text-gray-400 text-lg md:text-xl text-center mb-6'>
              We&apos;re exceptional at what we do
            </p>
          </div>
        </section>

        <section className='llpy-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
              <div className='lg:mb-0 mb-10'>
                <div className='group w-full h-full'>
                  <div className='relative h-full'>
                    <img
                      src='https://pagedone.io/asset/uploads/1696488602.png'
                      alt='ContactUs tailwind section'
                      className='w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700'
                    />
                    {/* <h1 className='font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11'>
                    Contact us
                  </h1> */}
                    <div className='absolute bottom-0 w-full lg:p-11 p-5'>
                      <div className='bg-white rounded-lg p-6 block'>
                        <a href='javascript:;' className='flex items-center mb-6'>
                          <IoCall size={20} color='blue' />
                          <h5 className='text-black text-base font-normal leading-6 ml-5'>
                            +234 916 470 7805
                          </h5>
                        </a>
                        <a href='javascript:;' className='flex items-center mb-6'>
                          <MdEmail color='blue' size={20} />
                          <h5 className='text-black text-base font-normal leading-6 ml-5'>
                            Pagedone1234@gmail.com
                          </h5>
                        </a>
                        <a href='javascript:;' className='flex items-center'>
                          <CiLocationOn color='blue' size={20} />
                          <h5 className='text-black text-base font-normal leading-6 ml-5'>
                            No C67, Suit A41 MIB Plaza, 1st Avenue Gwarinpa, F.C.T -Abuja.
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='llbg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl'>
                <h2 className='text-gray-600 font-manrope text-4xl font-semibold leading-10 mb-11'>
                  Send Us A Message
                </h2>
                <div className='py-3'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />
                </div>
                <div className='py-3'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />
                </div>
                <div className='py-3'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />
                </div>
                <div className='py-3 w-full'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none'
                  />
                </div>

                <div className='mb-10'>
                  <h4 className='text-gray-500 text-lg font-normal leading-7 mb-4'>
                    Preferred method of communication
                  </h4>
                  <div className='flex'>
                    <div className='flex items-center mr-11'>
                      <input
                        id='radio-group-1'
                        type='radio'
                        name='radio-group'
                        className='hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                      />
                      <label
                        for='radio-group-1'
                        className='flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6'
                      >
                        <span className='border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 '></span>{' '}
                        Email
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='radio-group-2'
                        type='radio'
                        name='radio-group'
                        className='hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                      />
                      <label
                        for='radio-group-2'
                        className='flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6'
                      >
                        <span className='border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 '></span>{' '}
                        Phone
                      </label>
                    </div>
                  </div>
                </div>

                <div className='py-3'>
                  <button className='w-full py-4 font-semibold text-lg text-white bg-[#3D95D1] rounded-xl hover:bg-blue-500 transition ease-in-out duration-500'>
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Contact;
