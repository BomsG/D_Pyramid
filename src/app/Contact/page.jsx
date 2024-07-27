import PageWrapper from "@/Components/PageWrapper";
import Nav from "../../Components/Nav";
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <PageWrapper>
        <section className="bg-white llmb-20 llmd:mb-52 llxl:mb-72">
          <div className="container max-w-screen-xl mx-auto px-4 ">
            {/* <nav
            className="flex-wrap lg:flex items-center py-14 xl:relative z-10"
            x-data="{navbarOpen:false}"
          >
            <div className="flex items-center justify-between mb-10 lg:mb-0">
              <img
                src="images/logo.png"
                alt="Logo img"
                className="w-32 md:-80 lg:w-ful"
              />

              <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-[#3D95D1] border border-[#3D95D1] rounded-md">
                <i data-feather="menu"></i>
              </button>
            </div>

            <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16">
              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Landing</a>
              </li>

              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Pages</a>
              </li>

              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Contact</a>
              </li>

              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">About</a>
              </li>
            </ul>

            <button className="px-5 py-3 lg:block border-2 border-[#3D95D1] rounded-lg font-semibold text-[#3D95D1] text-lg hover:bg-[#3D95D1] hover:text-white transition ease-linear duration-500">
              Request quote
            </button>
          </nav> */}
            <Nav />
          </div>
          {/* <!-- container.// --> */}
        </section>

        {/* <section className=''>
        <h1 className='font-manrope text-black text-4xl font-bold leading-10 absolute top-11 left-11'>
          Contact us
        </h1>
      </section> */}

        <section className="bg-white py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
            <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2">
              Contact Us
            </h1>
            <p className="font-normal text-gray-400 text-lg md:text-xl text-center mb-6">
              We&apos;re exceptional at what we do
            </p>
          </div>
        </section>

        <section className="llpy-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <img
                      src="https://pagedone.io/asset/uploads/1696488602.png"
                      alt="ContactUs tailwind section"
                      className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                    />
                    {/* <h1 className='font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11'>
                    Contact us
                  </h1> */}
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-white rounded-lg p-6 block">
                        <a
                          href="javascript:;"
                          className="flex items-center mb-6"
                        >
                          <IoCall size={20} color="blue" />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            +234 916 470 7805
                          </h5>
                        </a>
                        <a
                          href="javascript:;"
                          className="flex items-center mb-6"
                        >
                          <MdEmail color="blue" size={20} />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            Pagedone1234@gmail.com
                          </h5>
                        </a>
                        <a href="javascript:;" className="flex items-center">
                          <CiLocationOn color="blue" size={20} />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            No C67, Suit A41 MIB Plaza, 1st Avenue Gwarinpa,
                            F.C.T -Abuja.
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="llbg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-gray-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                  Send Us A Message
                </h2>
                <div className="py-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                  />
                </div>
                <div className="py-3">
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                  />
                </div>
                <div className="py-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                  />
                </div>
                <div className="py-3 w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                  />
                </div>

                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                    Preferred method of communication
                  </h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      />
                      <label
                        for="radio-group-1"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      />
                      <label
                        for="radio-group-2"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                        Phone
                      </label>
                    </div>
                  </div>
                </div>

                <div className="py-3">
                  <button className="w-full py-4 font-semibold text-lg text-white bg-[#3D95D1] rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white py-10 md:py-16 mt-80">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-center lg:text-left mb-10 lg:mb-0">
                <div className="flex justify-center lg:justify-start mb-5">
                  <img
                    src="images/logo.png"
                    alt="Logo img"
                    className="w-32 md:-80 lg:w-ful"
                  />
                </div>

                <p className="font-light text-gray-400 text-xl mb-10">
                  Get your dream house with
                </p>

                <div className="flex items-center justify-center lg:justify-start space-x-5">
                  <a
                    href="#"
                    className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500"
                  >
                    <i data-feather="facebook"></i>
                  </a>

                  <a
                    href="#"
                    className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500"
                  >
                    <i data-feather="twitter"></i>
                  </a>

                  <a
                    href="#"
                    className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-[#3D95D1] hover:text-white transition ease-in-out duration-500"
                  >
                    <i data-feather="linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="text-center lg:text-left mb-10 lg:mb-0">
                <h4 className="font-semibold text-gray-900 text-2xl mb-6">
                  Sitemap
                </h4>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Gallery
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Testimoni
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Book a meeting
                </a>
              </div>

              <div className="text-center lg:text-left mb-10 lg:mb-0">
                <h4 className="font-semibold text-gray-900 text-2xl mb-6">
                  Landing
                </h4>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Mobile App
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Property
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Personal Website
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Web Developer
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Online Course
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Donation
                </a>
              </div>

              <div className="text-center lg:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-6">
                  Utility
                </h4>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  FAQ
                </a>

                <a
                  href="#"
                  className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </footer>
      </PageWrapper>
    </>
  );
};

export default Contact;
