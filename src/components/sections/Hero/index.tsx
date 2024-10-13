import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-[calc(100vh-200px)] md:h-screen w-full transition-all duration-700 ease-in">
      <div className="h-[calc(100vh-200px)] md:h-screen w-full transition-all">
        <Image
          src="/images/gojek-hero-img.jpg"
          alt="Gojek hero image"
          width={1280}
          height={720}
          className="relative h-[calc(100vh-200px)] md:h-screen w-full object-cover"
        />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-end w-full h-[calc(100vh-200px)] md:h-screen py-[50px] md:py-[200px] md:px-[120px]">
        <h1 className="text-[26px] font-semibold text-main-white p-[22px] md:w-[55%] md:text-[48px]">
          3 countries. 20+ products. 1 leading on-demand platform.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
