import Carousel from "@/components/Carousel/Carousel";
import { MILESTONE_DETAILS } from "@/constant/overviewDetails";
import Image from "next/image";
import { FC } from "react";

const Milestones: FC = () => {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-[24px] text-main-black md:px-[180px] w-full border-b-[1px] border-b-main-black border-opacity-10 pb-[50px]">
      {MILESTONE_DETAILS.map((data, idx) => (
        <div
          className="hidden md:flex md:flex-col md:gap-[12px] md:items-center w-full translate-y-[-15%]"
          key={idx}
        >
          <div className="flex items-center justify-center h-[157px] w-[149px] mb-[20px]">
            <Image
              src={data.image}
              alt={data.image}
              width={149}
              height={157}
              priority={true}
              className="h-[157px] w-[149px]"
            />
          </div>
          <h3 className="text-[24px] font-bold leading-[30px] text-center">
            {data.title}
          </h3>
          <p className="text-[15px] md:text-[16px] font-normal text-center">
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
              <div className="flex items-center justify-center  h-[157px] w-[149px] pb-[20px]">
                <Image
                  src={data.image}
                  alt={data.image}
                  width={149}
                  height={157}
                  priority={true}
                  className="h-[157px] w-[149px]"
                />
              </div>
              <h3 className="text-[22px] font-bold text-center">
                {data.title}
              </h3>
              <p className="text-[15px] md:text-[16px] font-normal text-center max-w-[340px]">
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
