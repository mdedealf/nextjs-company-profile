import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-screen md:h-[calc(100vh-100px)] w-full">
      <div>
        <Image
          src="/images/gojek-hero-img.jpg"
          alt="Gojek hero image"
          width={1000}
          height={1000}
          className="relative h-screen w-screen object-cover"
        />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-end h-full w-full py-[200px] md:px-[120px]">
        <h1 className="text-[26px] font-semibold text-main-white p-[16px] md:w-[55%] md:text-[48px]">
          3 countries. 20+ products. 1 leading on-demand platform.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
