import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-[calc(100vh-200px)] md:h-screen w-full transition-all duration-700 ease-in bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/gojek-hero-img.jpg"
          alt="Gojek hero image"
          width={1280}
          height={720}
          className="relative h-[calc(100vh-200px)] md:h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-main-black opacity-20" />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-end w-full h-[calc(100vh-200px)] md:h-screen py-[50px] md:py-[200px] md:px-[120px] z-10">
        <h1 className="text-[26px] font-semibold text-main-white p-[22px] md:w-[55%] md:text-[48px]">
          3 countries. 20+ products. 1 leading on-demand platform.
        </h1>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px] mx-[26px]">
          <Link href="/products">Explore Our Products</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
