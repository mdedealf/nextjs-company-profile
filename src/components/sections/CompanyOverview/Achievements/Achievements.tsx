import Carousel from "@/components/Carousel/Carousel";
import { ACHIEVEMENTS_DETAILS } from "@/constant/overviewDetails";
import Image from "next/image";
import { FC } from "react";

const Achievements: FC = () => {
  return (
    <div className="flex flex-col gap-[30px] bg-main-white w-full pb-[80px] pt-[40px]">
      <h2 className="text-[26px] md:text-[48px] font-semibold text-center mx-[20px] text-main-black">
        We scale like a dream
      </h2>

      {/* Container */}
      <div className="hidden md:grid md:grid-cols-4 md:px-[180px] text-main-black py-[120px] gap-[20px] overflow-x-hidden">
        {ACHIEVEMENTS_DETAILS.map((achievement, idx) => (
          // Card container
          <div
            key={idx}
            style={{ backgroundColor: achievement.style }}
            className="md:flex-shrink-0 md:h-auto md:w-full rounded-[40px] shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <Image
                src={achievement.image}
                alt={achievement.alt}
                priority={true}
                width={achievement.width}
                height={achievement.height}
                className="translate-y-[-35%] w-full h-auto"
              />
              {/* Text content */}
              <div className="px-[40px] pb-[60px]">
                <h1 className="md:text-[26px] text-[36px] font-bold">
                  {achievement.title}
                </h1>
                <p>{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Carousel autoSlide={false}>
          {ACHIEVEMENTS_DETAILS.map((achievement, idx) => (
            // Card container
            <div
              key={idx}
              style={{ backgroundColor: achievement.style }}
              className="flex-shrink-0 h-auto w-full rounded-[40px] shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                <Image
                  src={achievement.image}
                  alt={achievement.alt}
                  priority={true}
                  width={achievement.width}
                  height={achievement.height}
                  className="w-full h-auto"
                />
                {/* Text content */}
                <div className="px-[40px] pb-[60px]">
                  <h1 className="text-[28px] md:text-[36px] font-bold">
                    {achievement.title}
                  </h1>
                  <p>{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Achievements;
