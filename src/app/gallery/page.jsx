import OurGallery from "@/components/OurGallery";
import Image from "next/image";
import img1 from "../../../public/images/roof7.jpeg";
import img2 from "../../../public/images/roof8.jpeg";
import img3 from "../../../public/images/roof10.jpeg";
import img4 from "../../../public/images/zinc.jpg";
import img5 from "../../../public/images/zinc3.jpg";
import img6 from "../../../public/images/Tilcor1.jpg";
import img7 from "../../../public/images/Tilcor2.jpg";
import img8 from "../../../public/images/Tilcor3.jpg";
import img9 from "../../../public/images/Tilcor4.jpg";
import img10 from "../../../public/images/roof12.jpeg";
import img11 from "../../../public/images/roof13.jpeg";
import img12 from "../../../public/images/roof14.jpeg";
import img13 from "../../../public/images/roof15.jpeg";

export default function Gallery() {
  const img = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img1,
    },
    {
      id: 3,
      img: img1,
    },
    {
      id: 4,
      img: img1,
    },
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img1,
    },
    {
      id: 7,
      img: img1,
    },
    {
      id: 8,
      img: img1,
    },
    {
      id: 9,
      img: img1,
    },
    {
      id: 10,
      img: img1,
    },
    {
      id: 11,
      img: img1,
    },
    {
      id: 12,
      img: img1,
    },
  ];
  return (
    <section className="mt-32 py-10 md:py-16 md:px-2 mx-[50px] md:mx-[100px]">
      <OurGallery />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3  mt-20">
        <Image src={img1} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img2} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img3} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img4} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img5} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img6} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img7} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img8} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img9} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img10} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img11} alt="image" className="h-[100px] md:h-[300px]" />
        <Image src={img12} alt="image" className="h-[100px] md:h-[300px]" />
      </div>
    </section>
  );
}
