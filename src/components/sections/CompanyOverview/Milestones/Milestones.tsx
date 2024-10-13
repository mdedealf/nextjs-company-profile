import Carousel from "@/components/Carousel/Carousel";
import { MILESTONE_DETAILS } from "@/constant/overviewDetails";
import Image from "next/image";
import { FC } from "react";

const Milestones: FC = () => {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-[24px] text-main-black md:px-[180px] w-full">
      {MILESTONE_DETAILS.map((data, idx) => (
        <div
          className="hidden md:flex md:flex-col md:gap-[12px] md:items-center w-full translate-y-[-15%]"
          key={idx}
        >
          <div className="flex items-center justify-center w-full mb-[20px]">
            <Image
              src={data.image}
              alt={data.image}
              width={140}
              height={186}
              priority={true}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="text-[24px] font-bold text-center">{data.title}</h3>
          <p className="text-[14px] md:text-[16px] font-normal text-center">
            {data.description}
          </p>
        </div>
      ))}
      <div className="flex md:hidden pb-[30px]">
        <Carousel autoSlide={false}>
          {MILESTONE_DETAILS.map((data, idx) => (
            <div
              className="flex flex-col gap-[8px] items-center w-full pt-[40px]"
              key={idx}
            >
              <div className="flex items-center justify-center  w-full pb-[20px]">
                <Image
                  src={data.image}
                  alt={data.image}
                  width={140}
                  height={186}
                  priority={true}
                  className="w-auto h-auto"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-center">
                {data.title}
              </h3>
              <p className="text-[14px] md:text-[16px] font-normal text-center">
                {data.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Milestones;
