import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="h-screen w-full transition-all duration-700 ease-in bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/gojek-hero-img-upscaled.webp"
          alt="Gojek hero image"
          width={2560}
          height={1440}
          className="relative h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-main-black opacity-30" />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-center md:justify-end w-full h-screen py-[50px] md:py-[200px] md:px-[120px] z-10">
        <div className="flex flex-col p-[22px] gap-[19px] mb-[20px]">
          <h1 className="text-[26px] font-bold text-main-white  md:w-[55%] md:text-[48px]">
            Your Everyday, Made Effortless.
          </h1>
          <p className="text-[18px] text-main-white font-normal md:w-[55%] md:text-[20px]">
            From rides to food, payments to deliveries, Gojek brings everything
            you need into one app. Simplify your day with just a tap.
          </p>
        </div>
        <div className="mx-[22px]">
          <Button>
            <Link href="/products">Explore Our Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
