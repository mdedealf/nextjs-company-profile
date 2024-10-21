import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-screen w-full transition-all duration-700 ease-in bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/gojek-banner.png"
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
      <div className="absolute top-0 flex flex-col items-start justify-center md:justify-end w-full h-screen py-[50px] md:py-[200px] md:px-[120px] z-10 gap-[16px]">
        <h1 className="text-[26px] font-semibold text-main-white px-[22px] md:w-[55%] md:text-[48px]">
          All-in-One Services at Your Fingertips
        </h1>
        <p className="text-[16px] font-light text-main-white px-[22px] md:w-[55%] md:text-[20px]">
          Discover Ngojol&#39;s range of products built to make everyday tasks
          easier. From transportation and delivery to payments, we&#39;re here
          to simplify life, drive growth, and create lasting impact.
        </p>
      </div>
    </section>
  );
};

export default Hero;
