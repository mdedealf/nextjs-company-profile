import Carousel from "@/components/Carousel/Carousel";
import { OVERVIEW_DETAILS } from "@/constant/overviewDetails";
import { FC } from "react";

const Achievements: FC = () => {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-[24px] bg-main-white text-main-black py-[40px] md:px-[180px] rounded-t-[80px] w-full">
      {OVERVIEW_DETAILS.map((data, idx) => (
        <div
          className="hidden md:flex flex-col gap-[8px] items-center w-full"
          key={idx}
        >
          <div className="text-center h-[80px] w-full">{data.image}</div>
          <h3 className="text-[24px] font-semibold text-center">
            {data.title}
          </h3>
          <p className="text-[14px] md:text-[16px] font-normal text-center">
            {data.description}
          </p>
        </div>
      ))}
      <div className="flex md:hidden">
        <Carousel>
          {OVERVIEW_DETAILS.map((data, idx) => (
            <div
              className="flex flex-col gap-[8px] items-center w-full"
              key={idx}
            >
              <div className="text-center h-[80px] w-full">{data.image}</div>
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

export default Achievements;
