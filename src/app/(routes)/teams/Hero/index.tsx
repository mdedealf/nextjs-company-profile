import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-screen w-full transition-all duration-700 ease-in bg-main-green">
      <div className="relative h-screen w-full transition-all">
        <Image
          src="/images/gojek-cta.svg"
          alt="Gojek hero image"
          width={2560}
          height={1440}
          className="absolute right-0 bottom-0 h-auto w-[800px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-main-black/10 to-main-black/0" />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-center w-full h-screen py-[50px] md:py-[200px] md:px-[120px] z-10">
        <div className="flex flex-col p-[22px] gap-[19px] mb-[20px]">
          <h1 className="text-[26px] font-semibold text-main-white  md:w-[55%] md:text-[48px]">
            Meet the Minds Behind the Movement.
          </h1>
          <p className="text-[18px] text-main-white font-light md:w-[55%] md:text-[20px]">
            At Gojek, our teams are the driving force behind transformative
            innovations. Get to know the passionate individuals who are
            redefining convenience and shaping the future of everyday services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
