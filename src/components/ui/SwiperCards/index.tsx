"use client";

import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Modules
import { Pagination, Navigation } from "swiper/modules";

interface SwiperCardsProps {
  children: ReactNode;
}

const SwiperCards: FC<SwiperCardsProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      navigation={{ enabled: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full"
      loop={true}
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        // 800: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        1000: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 20,
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
    </Swiper>
  );
};

export default SwiperCards;
