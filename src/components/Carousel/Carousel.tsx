"use client";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { FC, ReactNode, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  autoSlide: boolean;
  autoSlideInterval?: number;
}

const Carousel: FC<CarouselProps> = ({
  children: slides,
  autoSlide,
  autoSlideInterval,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previous = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  const next = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex flex-col gap-[24px] text-main-black overflow-hidden w-full">
      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            className="w-full flex flex-col items-center justify-center flex-shrink-0 px-[20px]"
            key={idx}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Carousel navigation left and right */}
      <div className="absolute inset-0 flex items-center justify-between">
        <div
          onClick={previous}
          className="bg-main-white cursor-pointer text-main-black border rounded-full p-[10px] opacity-50 hover:opacity-100"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </div>
        <div
          onClick={next}
          className="bg-main-white cursor-pointer text-main-black border rounded-full p-[10px] opacity-50 hover:opacity-100"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </div>
      </div>

      {/* Dot indicators carousel current slide */}
      <div className="flex items-center justify-center gap-2 py-[10px]">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all bg-[#00AA13] rounded-full ${
              currentSlide === idx ? "p-1" : "p-1 bg-opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
