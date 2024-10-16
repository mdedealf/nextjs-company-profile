import { MILESTONES_JOURNEYS } from "@/constant/milestonesJourneys";
import Image from "next/image";
import { FC } from "react";

const Milestones: FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-[28px] md:text-[48px] font-bold text-main-white text-center pt-[80px] pb-[80px]">
        Milestones
      </h2>

      <div className="flex flex-col gap-[40px] pb-[100px]">
        {MILESTONES_JOURNEYS.map((journey, idx) => (
          <div
            key={idx}
            className="flex items-center w-full px-[20px] gap-[24px]"
          >
            <h3 className="text-[24px] font-semibold text-main-white md:text-end">
              {journey.year}
            </h3>

            <div className="flex flex-col w-full items-center justify-center md:flex-row gap-[20px] md:gap-[40px]">
              <div className="flex-shrink-0 items-start justify-start transition-all">
                <Image
                  src={journey.image}
                  alt={journey.alt}
                  width={626}
                  height={378}
                  className="max-w-auto max-h-auto object-cover"
                />
              </div>
              <p className="text-[18px] text-main-white font-light leading-[24px] md:text-left md:max-w-[600px]">
                {journey.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
