import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-[calc(100vh-200px)] md:h-screen w-full transition-all duration-700 ease-in bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/gojek-hero-img-upscaled.webp"
          alt="Gojek hero image"
          width={1280}
          height={720}
          className="relative h-[calc(100vh-200px)] md:h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-main-black opacity-20" />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-end w-full h-[calc(100vh-200px)] md:h-screen py-[50px] md:py-[200px] md:px-[120px] z-10">
        <div className="flex flex-col p-[22px] gap-[19px] mb-[20px]">
          <h1 className="text-[26px] font-semibold text-main-white  md:w-[55%] md:text-[48px]">
            Your Everyday, Made Effortless.
          </h1>
          <p className="text-[18px] text-main-white font-light md:w-[55%] md:text-[20px]">
            From rides to food, payments to deliveries, Gojek brings everything
            you need into one app. Simplify your day with just a tap.
          </p>
        </div>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px] mx-[22px]">
          <Link href="/products">Explore Our Products</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
