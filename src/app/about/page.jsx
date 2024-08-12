import React from "react";
import Nav from "../../components/Nav";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import hero from "../../../public/images/hero4.jpeg";
import hero2 from "../../../public/images/hero.jpeg";
import hero4 from "../../../public/images/hero6.jpeg";
import heroo from "../../../public/images/heroo.jpeg";
import heroo1 from "../../../public/images/heroo1.jpeg";
import vision from "../../../public/images/aboutHero.jpeg";
import bg from "../../../public/images/hero4.jpeg";
import logo from "../../../public/images/logo2.png";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <PageWrapper>
      <div className="mt-32">
        {/* <div className='bg-gray-900'>
          <div
            className=' bg-cover bg-center opacity-40 w-full h-[40vh] blur-sm '
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className='absolute  bg-opacity-50 px-20 py-10 h-[500px]'>
              <h3>About Us</h3>
            </div>
          </div>
          <div className='absolute inset-0  bg-opacity-50 px-20 py-10 h-[500px]'>
            <Nav />
            <Image src={logo} alt='logo' className='w-[300px] mx-auto my-[100px] ' />
          </div>
        </div> */}

        <section className=" py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
            <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2">
              About Us
            </h1>
            <p className="font-normal text-gray-400 text-lg md:text-xl text-center">
              Providing trendy up to date models of roofing to satisfy customers
            </p>
          </div>
        </section>

        {/* <div className='my-10 mx-5 md:mx-20'>
          <h3 className='text-center text-lg md:text-2xl my-20 font-bold tracking-wide md:w-[500px] mx-auto'>
            Providing trendy up to date models of roofing to satisfy customers
          </h3>
        </div> */}
        <div className="mx-10 md:mx-[150px]">
          <div className="md:flex justify-center gap-5 my-10 ">
            <div className="w-full">
              <Image src={hero} alt="hero" className="w-" />
              <p className="my-5 text-sm tracking-wider">
                We offer all required roofing accessories to give you a seamless
                roof and a complete roofing solution. Having quality roofing
                tiles alone is not enough which is why we provide accessories
                for a sound installation and superior protection of your home.
              </p>
              <Link href="/gallery">
                <button className="bg-blue-500 text-white py-3 px-5 text-sm   tracking-widest">
                  VIEW WORKS
                </button>
              </Link>
            </div>
            <div className="w-full ">
              <div className="flex items-center gap-5">
                <h2 className="text-3xl font-bold tracking-wider my-5">
                  Know more
                </h2>
                <div className="bg-black w-[110px] h-[2px]"></div>
              </div>
              <p className="text-sm tracking-wider left-7 mb-5 ">
                To create an environments that propels building management. With
                guarantee products manufactured using quality roofing material
                in terms of strength, durability and reliability to elevate our
                image to the highest standards of professionalism, ethics and
                good customer service
              </p>
              <Image
                src={hero2}
                alt="hero"
                className="w-[580px] sm:h-[600px] h-[300px]"
              />
            </div>
          </div>
          <div className="my-20">
            <h1 className="text-3xl font-bold tracking-wider my-10 underline underline-offset-8 decoration-blue-500">
              Our Mission
            </h1>
            <p className="text-sm tracking-wide leading-6">
              D-Pyramid vision is a unique extension of cutting edge servicing
              company that focus on Stone coated roof tiles, Aluminium roofing
              sheets, steel Structure water collectors, felt and supply of
              cement and iron rods ranging from residential, organization and
              commercial properties. <br /> <br />
              D-Pyramid Vision is well experience in roofing lifestyle
              management from concept to completion. We also &quot;talk to
              us&quot; where you can request for solutions to your homes and
              properties when it comes to roofing.
              <br /> <br />
              Our watchword is to provide quality service and customized
              solution to our valued clients both public and private sector. We
              conduct our relationship with all our clients and business partner
              based on principle and sustain ability, mutual trust and integrity
              upholding our reputation in any condition.
            </p>
          </div>
          <div className="grid grid-cols-2 my-20">
            <Image src={hero4} alt="image" className="h-[200px] md:h-[400px]" />
            <Image src={heroo} alt="image" className="h-[200px] md:h-[400px]" />
            <Image
              src={heroo1}
              alt="image"
              className="h-[200px] md:h-[400px]"
            />
            <Image src={hero4} alt="image" className="h-[200px] md:h-[400px]" />
          </div>
          {/* <Offer /> */}
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;