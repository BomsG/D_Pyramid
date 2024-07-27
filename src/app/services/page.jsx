export default function Services() {
  return (
    <div>
      <section className='bg-white llmb-20 llmd:mb-52 llxl:mb-72'>
        <div className='container max-w-screen-xl mx-auto px-4'>
          <nav
            className='flex-wrap lg:flex items-center py-14 xl:relative z-10'
            x-data='{navbarOpen:false}'
          >
            <div className='flex items-center justify-between mb-10 lg:mb-0'>
              <img src='images/logo.png' alt='Logo img' className='w-32 md:-80 lg:w-ful' />

              <button className='lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-[#3D95D1] border border-[#3D95D1] rounded-md'>
                <i data-feather='menu'></i>
              </button>
            </div>

            <ul className='lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16'>
              <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                <a href='#'>Landing</a>
              </li>

              <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                <a href='#'>Pages</a>
              </li>

              <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                <a href='#'>Contact</a>
              </li>

              <li className='font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0'>
                <a href='#'>About</a>
              </li>
            </ul>

            <button className='px-5 py-3 lg:block border-2 border-[#3D95D1] rounded-lg font-semibold text-[#3D95D1] text-lg hover:bg-[#3D95D1] hover:text-white transition ease-linear duration-500'>
              Request quote
            </button>
          </nav>
        </div>
        {/* <!-- container.// --> */}
      </section>

      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-center font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <a href='javascript:;' className='max-w-[384px] mx-auto'>
              <div className='w-full relative max-w-sm aspect-square overflow-hidden'>
                <h6 className=' absolute bottom-4 left-8 font-medium text-xl leading-8 text-white mb-2 z-20'>
                  Roofing
                </h6>
                <div className='bg-black absolute bottom-0 h-20 rounded-b-xl w-full opacity-25 z-10'></div>
                <img
                  src='https://pagedone.io/asset/uploads/1701157806.png'
                  alt='cream image'
                  className='w-full h-full rounded-xl'
                />
              </div>
            </a>

            <a href='javascript:;' className='max-w-[384px] mx-auto'>
              <div className='w-full relative max-w-sm aspect-square'>
                <h6 className=' absolute bottom-4 left-8 font-medium text-xl leading-8 text-white mb-2 z-20'>
                  Roofing
                </h6>
                <div className='bg-black absolute bottom-0 h-20 rounded-b-xl w-full opacity-25 z-10'></div>
                <img
                  src='https://pagedone.io/asset/uploads/1701157826.png'
                  alt='cream image'
                  className='w-full h-full rounded-xl'
                />
              </div>
            </a>

            <a href='javascript:;' className='max-w-[384px] mx-auto'>
              <div className='w-full max-w-sm aspect-square relative'>
                <h6 className=' absolute bottom-4 left-8 font-medium text-xl leading-8 text-white mb-2 z-20'>
                  Roofing
                </h6>
                <div className='bg-black absolute bottom-0 h-20 rounded-b-xl w-full opacity-25 z-10'></div>
                <img
                  src='https://pagedone.io/asset/uploads/1701157844.png'
                  alt='serum bottle image'
                  className='w-full h-full rounded-xl'
                />
                {/* <span className='py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10'>
                  20% Off
                </span> */}
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className='py-14 lg:py-24 relative'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-9'>
            <div className='lg:pr-24 flex items-center'>
              <div className='data w-full'>
                <img
                  src='https://pagedone.io/asset/uploads/1702034785.png'
                  alt='About Us tailwind page'
                  className='block lg:hidden mb-9 mx-auto'
                />
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center'>
                  We are Creative Since 2005
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Pagedone isn’t just a collection of components and guidelines; it's a philosophy.
                  We go beyond aesthetics, prioritizing accessibility, scalability, and usability.
                  Every element, from the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user satisfaction.
                </p>
              </div>
            </div>
            <div className='img-box'>
              <img
                src='https://pagedone.io/asset/uploads/1702034785.png'
                alt='About Us tailwind page'
                className='hidden lg:block'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-manrope text-4xl text-center text-gray-900 font-bold mb-14'>
            Our results in numbers
          </h2>
          <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
            <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
              <div className='flex gap-5'>
                <div className='font-manrope text-2xl font-bold text-indigo-600'>240%</div>
                <div className='flex-1'>
                  <h4 className='text-xl text-gray-900 font-semibold mb-2'>Company growth</h4>
                  <p className='text-xs text-gray-500 leading-5'>
                    Company's remarkable growth journey as we continually innovate and drive towards
                    new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
              <div className='flex gap-5'>
                <div className='font-manrope text-2xl font-bold text-indigo-600'>175+</div>
                <div className='flex-1'>
                  <h4 className='text-xl text-gray-900 font-semibold mb-2'>Company growth</h4>
                  <p className='text-xs text-gray-500 leading-5'>
                    Our very talented team members are the powerhouse of pagedone and pillars of our
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
              <div className='flex gap-5'>
                <div className='font-manrope text-2xl font-bold text-indigo-600'>625+</div>
                <div className='flex-1'>
                  <h4 className='text-xl text-gray-900 font-semibold mb-2'>Projects Completed</h4>
                  <p className='text-xs text-gray-500 leading-5'>
                    We have accomplished more than 625 projects worldwide and we are still counting
                    many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24 relative'>
        <div className='w-full max-w-7xl px-6 lg:px-8 mx-auto'>
          <div className='flex items-center justify-center flex-col gap-5 mb-14'>
            {/* <span className='bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full'>
              Portfolio
            </span> */}
            <h2 className='font-manrope font-bold text-4xl text-gray-900 text-center'>
              Some Insights
            </h2>
            <p className='text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center'>
              In the world of architecture or organization, structure provides the backbone for a
              purposeful and harmonious existence.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14'>
            <div
              className='sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6'
              style={{ backgroundImage: 'url(https://pagedone.io/asset/uploads/1707713043.png)' }}
            >
              <h6 className='font-medium text-xl leading-8 text-white mb-4'>
                Architecture Designer
              </h6>
              <p className='text-base font-normal text-white/70'>
                where knowledge meets innovation, and success is sculpted through a blend of skill
                and vision.
              </p>
            </div>
            <div className='block'>
              <img
                src='https://pagedone.io/asset/uploads/1707713007.png'
                alt='Building structure image'
                className='w-full rounded-lg'
              />
            </div>
            <div className='block'>
              <img
                src='https://pagedone.io/asset/uploads/1707713018.png'
                alt='Building structure image'
                className='w-full rounded-lg'
              />
            </div>
            <div className='block'>
              <img
                src='https://pagedone.io/asset/uploads/1707713032.png'
                alt='Building structure image'
                className='w-full rounded-lg'
              />
            </div>
            <div
              className=' bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6'
              style={{ backgroundImage: 'url(https://pagedone.io/asset/uploads/1707713043.png)' }}
            >
              <h6 className='font-medium text-xl leading-8 text-white mb-4'>Interior Designer</h6>
              <p className='text-base font-normal text-white/70'>
                Crafting exceptional interiors, where aesthetics meet functionality for spaces that
                inspire and elevate.
              </p>
            </div>
            <div className='block'>
              <img
                src='	https://pagedone.io/asset/uploads/1707713055.png'
                alt='Building structure image'
                className='w-full rounded-lg'
              />
            </div>
            <div
              className=' bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6'
              style={{ backgroundImage: 'url(https://pagedone.io/asset/uploads/1707713043.png)' }}
            >
              <h6 className='font-medium text-xl leading-8 text-white mb-4'>Business Building</h6>
              <p className='text-base font-normal text-white/70'>
                Architecting business success through innovation, resilience, and strategic
                leadership.
              </p>
            </div>
          </div>
          {/* <button className='w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600'>
            Load More
          </button> */}
        </div>
      </section>

      <footer className='bg-white py-10 md:py-16 mt-80'>
        <div className='container max-w-screen-xl mx-auto px-4'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='text-center lg:text-left mb-10 lg:mb-0'>
              <div className='flex justify-center lg:justify-start mb-5'>
                <img src='images/logo.png' alt='Logo img' className='w-32 md:-80 lg:w-ful' />
              </div>

              <p className='font-light text-gray-400 text-xl mb-10'>Get your dream house with</p>

              <div className='flex items-center justify-center lg:justify-start space-x-5'>
                <a
                  href='#'
                  className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500'
                >
                  <i data-feather='facebook'></i>
                </a>

                <a
                  href='#'
                  className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500'
                >
                  <i data-feather='twitter'></i>
                </a>

                <a
                  href='#'
                  className='px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500'
                >
                  <i data-feather='linkedin'></i>
                </a>
              </div>
            </div>

            <div className='text-center lg:text-left mb-10 lg:mb-0'>
              <h4 className='font-semibold text-gray-900 text-2xl mb-6'>Sitemap</h4>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Home
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Features
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Gallery
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Testimoni
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Book a meeting
              </a>
            </div>

            <div className='text-center lg:text-left mb-10 lg:mb-0'>
              <h4 className='font-semibold text-gray-900 text-2xl mb-6'>Landing</h4>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Mobile App
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Property
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Personal Website
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Web Developer
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Online Course
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Donation
              </a>
            </div>

            <div className='text-center lg:text-left'>
              <h4 className='font-semibold text-gray-900 text-2xl mb-6'>Utility</h4>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                FAQ
              </a>

              <a
                href='#'
                className='block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300'
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
