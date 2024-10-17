import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-screen w-full transition-all duration-700 ease-in bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/about-page/about-hero-img.webp"
          alt="About page hero image"
          width={1280}
          height={720}
          className="relative h-screen w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100px, rgba(0, 0, 0, 0.2) 100%)",
          }}
        />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-center md:justify-end w-full h-screen py-[50px] md:py-[200px] md:px-[120px] z-10">
        <div className="flex flex-col p-[22px] gap-[19px] mb-[20px]">
          <h1 className="text-[26px] font-semibold text-main-white  md:w-[55%] md:text-[48px]">
            Revolutionizing Urban Mobility.
          </h1>
          <p className="text-[18px] text-main-white font-light md:w-[55%] md:text-[20px]">
            Gojek is committed to reshaping urban mobility by connecting users
            with essential services—from rides to food delivery—all in one app,
            enhancing daily life for our users.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
