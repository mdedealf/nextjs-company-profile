import Carousel from "@/components/Carousel/Carousel";
import { TESTIMONIALS } from "@/constant/testimonials";
import Image from "next/image";
import { FC } from "react";

const Testimonials: FC = () => {
  return (
    <div className="flex flex-col bg-main-white w-full text-main-black transition-all">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[80px] md:pt-[120px] pb-[80px] md:pb-[120px]">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px]">
          What our testimonials think
        </h2>
      </div>

      <div className="hidden md:flex w-full justify-center md:px-[180px] lg:px-[280px] pb-[120px] gap-[20px] md:gap-[40px]">
        {TESTIMONIALS.map((testimoni, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-[40px] border-[1px] rounded-[30px] min-w-[380px] px-[20px] py-[40px] transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            <div>
              <Image
                src={testimoni.image}
                alt={testimoni.alt}
                width={180}
                height={180}
                className="h-[110px] w-[110px] md:h-[140px] md:w-[140px] transition-all"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-[20px] h-full">
              <p className="text-[16px] text-center max-w-[260px] md:max-w-[300px] font-light leading-[30px]">
                &#34;{testimoni.description}&#34;
              </p>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[20px] font-bold pt-[20px]">
                  {testimoni.name}
                </h3>
                <span className="text-[14px] font-light underline">
                  {testimoni.job}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex w-full justify-center md:px-[280px] pb-[120px] gap-[80px]">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {TESTIMONIALS.map((testimoni, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-[40px] border-[1px] rounded-[30px] md:min-w-[380px] px-[20px] py-[40px] transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div>
                <Image
                  src={testimoni.image}
                  alt={testimoni.alt}
                  width={180}
                  height={180}
                  className="h-[110px] w-[110px] md:h-[140px] md:w-[140px] transition-all"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-[20px] h-full">
                <p className="text-[16px] text-center max-w-[260px] md:max-w-[300px] font-light leading-[30px]">
                  &#34;{testimoni.description}&#34;
                </p>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-[20px] font-bold pt-[20px]">
                    {testimoni.name}
                  </h3>
                  <span className="text-[14px] font-light underline">
                    {testimoni.job}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
