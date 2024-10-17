import Carousel from "@/components/Carousel/Carousel";
import { ACHIEVEMENTS_DETAILS } from "@/constant/overviewDetails";
import Image from "next/image";
import { FC } from "react";

const Achievements: FC = () => {
  return (
    <div className="flex flex-col gap-[30px] bg-main-white w-full pb-[30px] pt-[80px] border-b-[1px] border-main-black border-opacity-10">
      <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black auto-show">
        We scale like a dream
      </h2>

      <div className="hidden md:grid md:grid-cols-4 md:px-[180px] text-main-black py-[120px] gap-[40px] overflow-x-hidden">
        {ACHIEVEMENTS_DETAILS.map((achievement, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: achievement.style }}
            className="md:flex-shrink-0 md:h-auto md:w-full rounded-[40px]  shadow-2xl"
          >
            <div className="h-auto w-auto flex flex-col gap-4">
              <Image
                src={achievement.image}
                alt={achievement.alt}
                width={achievement.width}
                height={achievement.height}
                className="translate-y-[-25%] w-full h-auto object-cover"
              />
              <div className="px-[40px] pb-[60px]">
                <h1 className="text-[26px] md:text-[36px] font-bold">
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
            <div
              key={idx}
              style={{ backgroundColor: achievement.style }}
              className="flex-shrink-0 h-auto w-full rounded-[40px] shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                <Image
                  src={achievement.image}
                  alt={achievement.alt}
                  width={achievement.width}
                  height={achievement.height}
                  className="w-full h-auto"
                />
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
