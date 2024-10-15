"use client";

import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

// Modules
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface SwiperCardsProps {
  children: ReactNode;
  slidesPerView: number;
  loop: boolean;
}

const SwiperCards: FC<SwiperCardsProps> = ({
  children,
  slidesPerView,
  loop,
}) => {
  return (
    <div className="swiper-container relative">
      <Swiper
        slidesPerView={slidesPerView}
        loop={loop}
        spaceBetween={40}
        navigation={{
          enabled: true,
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className} custom-pagination-bullet"></span>`;
          },
        }}
        scrollbar={{ draggable: true }}
        className="w-full"
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {Array.isArray(children) ? (
          children.map((slide, idx) => (
            <SwiperSlide key={idx}>{slide}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}

        <div className="relative custom-prev bg-main-white text-main-black border rounded-full p-[10px] opacity-30 hover:opacity-100 transition-all">
          <ChevronLeftIcon className="h-5 w-5" />
        </div>
        <div className="custom-next bg-main-white text-main-black border rounded-full p-[10px] opacity-30 hover:opacity-100 transition-all">
          <ChevronRightIcon className="h-5 w-5" />
        </div>
        <div className="custom-pagination-container relative flex justify-center items-center w-full mt-[20px]">
          <div className="custom-pagination text-center"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCards;
