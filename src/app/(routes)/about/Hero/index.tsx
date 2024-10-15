import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-[calc(100vh-200px)] md:h-screen w-full transition-all duration-700 ease-in bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/about-page/about-hero-img.webp"
          alt="About page hero image"
          width={1280}
          height={720}
          className="relative h-[calc(100vh-200px)] md:h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-main-black opacity-20" />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-end w-full h-[calc(100vh-200px)] md:h-screen py-[50px] md:py-[200px] md:px-[120px] z-10 gap-[16px]">
        <h1 className="text-[26px] font-semibold text-main-white  md:w-[55%] md:text-[48px]">
          Been quite a ride.
        </h1>
        <p className="text-[18px] text-main-white font-light md:w-[55%] md:text-[20px]">
          Know our journey, and the people behind it.
        </p>
      </div>
    </section>
  );
};
export default Hero;
