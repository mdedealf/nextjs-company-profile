"use client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const words = ["Easier.", "Effortless.", "Seamless.", "Convenient."];

const Hero: FC = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        const newIndex = (wordIndex + 1) % words.length;
        setWordIndex(newIndex);
        setCurrentWord(words[newIndex]);
        setAnimate(true);
      }, 100);
    }, 4000);

    return () => clearInterval(wordChangeInterval);
  }, [wordIndex]);

  return (
    <section className="h-screen w-full transition-all duration-700 ease-in-out bg-main-black]">
      <div className="relative h-auto md:h-screen w-full transition-all">
        <Image
          src="/images/hero-img-upscaled.webp"
          alt="Gojek hero image"
          width={3200}
          height={1724}
          className="relative h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-main-black/50 to-main-black/10" />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-center md:justify-end w-full h-screen py-[50px] md:py-[200px] md:px-[120px] z-10">
        <div className="flex flex-col p-[22px] gap-[19px] mb-[20px]">
          <h1 className="text-[30px] font-semibold text-main-white md:w-[55%] md:text-[48px]">
            Your Everyday, Made
            <span
              className={cn("block font-normal", {
                "animate-slide-up": animate,
                "": !animate,
              })}
            >
              {currentWord}
            </span>
          </h1>
          <p className="text-[18px] text-main-white font-light md:w-[55%] md:text-[20px]">
            From rides to food, payments to deliveries, ngojol brings everything
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
