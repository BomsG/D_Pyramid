import Image from "next/image";
import Simg3 from "../../../public/images/bg.jpeg";
import Simg1 from "../../../public/images/Simg1.jpeg";
import Simg2 from "../../../public/images/Simg2.jpeg";
import Simg4 from "../../../public/images/Simg4.jpeg";
import Simg5 from "../../../public/images/hero.jpeg";
import Hero from "../../../public/images/roof9.jpeg";
import PageWrapper from "@/components/PageWrapper";

export default function Services() {
  const item = [
    {
      id: 1,
      name: "Long Span Aluminium Roofing Sheets",
    },
    {
      id: 2,
      name: "Step Tile Aluminium Roofing Sheets Metcopo Aluminium Roofing Sheets",
    },
    {
      id: 3,
      name: "Currogated Aluminium Roofing Sheets",
    },
    {
      id: 4,
      name: "Aluminium Composite Panels",
    },
    {
      id: 5,
      name: "Stone Coated Aluminium Roofing Sheets",
    },
    {
      id: 6,
      name: "Water Collector & Felts",
    },
    {
      id: 7,
      name: "Steel Structure",
    },
    {
      id: 8,
      name: "Supply of Iron rods and Cement",
    },
  ];
  return (
    <PageWrapper>
      <div className="mt-32">
        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
            <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2">
              Our Services
            </h1>
            <p className="font-normal text-gray-400 text-lg md:text-xl text-center mb-6">
              We&apos;re exceptional at what we do
            </p>
          </div>
        </section>

        <section className="sm:py-4 lg:py-4 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
              <div className="lg:pr-24 flex">
                <div className="data w-full">
                  <img
                    src="images/roof9.jpeg"
                    alt="About Us "
                    className="block lg:hidden mb-9 mx-auto"
                  />
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center underline underline-offset-8 decoration-blue-500">
                    What we offer
                  </h2>

                  {item.map((item) => (
                    <li
                      key={item.id}
                      className="  tracking-wider  text-[14px] md:text-[16px] leading-6  text-gray-500  max-w-2xl mx-auto"
                    >
                      {item.name}
                    </li>
                  ))}
                  {/* <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Our watchword is to provide quality service and customize
                  solution to our valued clients both public and private sector.
                  We conduct our relationship with all our clients and business
                  partner based on principle and sustain ability, mutual trust
                  and integrity upholding our reputation in any condition.
                </p> */}
                </div>
              </div>
              <div className="img-box">
                <Image
                  src={Hero}
                  alt="image"
                  className="hidden lg:block rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <a href="#" className="max-w-[384px] mx-auto">
                <div className="w-full relative max-w-sm aspect-square">
                  <h6 className=" absolute bottom-4 left-8 font-medium text-xl leading-8 text-white mb-2 z-20">
                    Aluminium Roofing Sheets
                  </h6>
                  <div className="bg-black absolute bottom-0 h-20 rounded-b-xl w-full opacity-25 z-10"></div>
                  <Image
                    src={Simg3}
                    alt="image"
                    className="h-[400px] rounded-xl"
                  />
                </div>
              </a>

              <a href="#" className="max-w-[384px] mx-auto">
                <div className="w-full relative max-w-sm aspect-square">
                  <h6 className=" absolute bottom-4 left-8 font-medium text-xl leading-8 text-white mb-2 z-20">
                    Metcopo Aluminium Roofing Sheets
                  </h6>
                  <div className="bg-black absolute bottom-0 h-20 rounded-b-xl w-full opacity-25 z-10"></div>
                  <Image
                    src={Simg1}
                    alt="image"
                    className="h-[400px] rounded-xl"
                  />
                </div>
              </a>

              <a href="#" className="max-w-[384px] mx-auto">
                <div className="w-full max-w-sm aspect-square relative">
                  <h6 className=" absolute bottom-4 left-8 font-medium text-xl leading-8 text-white mb-2 z-20">
                    Currogated Aluminium Roofing Sheets
                  </h6>
                  <div className="bg-black absolute bottom-0 h-20 rounded-b-xl w-full opacity-25 z-10"></div>
                  <Image
                    src={Simg2}
                    alt="image"
                    className="h-[400px] rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="py-7">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              Our result in numbers
            </h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="font-manrope text-2xl font-bold text-indigo-600">
                    240%
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Company growth
                    </h4>
                    <p className="text-xs text-gray-500 leading-5">
                      Company&apos;s remarkable growth journey as we continually
                      innovate and drive towards new heights of success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="font-manrope text-2xl font-bold text-indigo-600">
                    175+
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Company growth
                    </h4>
                    <p className="text-xs text-gray-500 leading-5">
                      Our very talented team members are the powerhouse of
                      pagedone and pillars of our success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="font-manrope text-2xl font-bold text-indigo-600">
                    625+
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Projects Completed
                    </h4>
                    <p className="text-xs text-gray-500 leading-5">
                      We have accomplished more than 625 projects worldwide and
                      we are still counting many more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-7 relative">
          <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
            <div className="flex items-center justify-center flex-col gap-5 mb-14">
              <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
                Some Insights
              </h2>
              <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
                In the world of architecture or organization, structure provides
                the backbone for a purposeful and harmonious existence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
              <div
                className="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6"
                style={{
                  backgroundImage: `url(${Simg4.src})`,
                }}
              >
                <div className="bg-[#0000006c] px-5 py-3 ">
                  <h6 className="font-medium text-xl leading-8 text-white mb-4">
                    Architecture Designer
                  </h6>
                  <p className="text-base font-normal text-white/70">
                    where knowledge meets innovation, and success is sculpted
                    through a blend of skill and vision.
                  </p>
                </div>
              </div>
              <div className="block">
                <img
                  src="images/heroo.jpeg"
                  alt="Building structure image"
                  className="w-full rounded-lg h-[400px]"
                />
              </div>
              <div className="block">
                <img
                  src="images/hero3.jpeg"
                  alt="Building structure image"
                  className="w-full rounded-lg h-[400px]"
                />
              </div>
              <div className="block">
                <img
                  src="images/roof15.jpeg"
                  alt="Building structure image"
                  className="w-full rounded-lg h-[400px]"
                />
              </div>
              <div
                className=" bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6"
                style={{
                  backgroundImage: `url(${Simg5.src})`,
                }}
              >
                <div className="bg-[#0000006c] px-5 py-3 ">
                  <h6 className="font-medium text-xl leading-8 text-white mb-4">
                    Interior Designer
                  </h6>
                  <p className="text-base font-normal text-white/70">
                    Crafting exceptional interiors, where aesthetics meet
                    functionality for spaces that inspire and elevate.
                  </p>
                </div>
              </div>
              <div className="block">
                <img
                  src="	images/roof5.jpeg"
                  alt="Building structure image"
                  className=" w-full rounded-lg h-[400px]"
                />
              </div>
              <div
                className=" bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6"
                style={{
                  backgroundImage: `url(${Hero.src})`,
                }}
              >
                <div className="bg-[#0000006c] px-5 py-3 ">
                  <h6 className="font-medium text-xl leading-8 text-white mb-4">
                    Business Building
                  </h6>
                  <p className="text-base font-normal text-white/70">
                    Architecting business success through innovation,
                    resilience, and strategic leadership.
                  </p>
                </div>
              </div>
            </div>
            {/* <button className='w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600'>
            Load More
          </button> */}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
