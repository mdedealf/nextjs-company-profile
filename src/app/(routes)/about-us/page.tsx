import { FC } from "react";
import Hero from "./Hero";
import Milestones from "./milestones";
import FounderImages from "@/components/FounderImages";

const AboutUsPage: FC = () => {
  return (
    <section className="w-full h-auto">
      <Hero />
      <div className="flex flex-col items-center justify-center w-full mb-[80px] gap-[60px] bg-main-white pt-[80px] pb-[120px] px-[20px] md:px-[120px] lg:px-[180px]">
        <div className="flex flex-col w-full items-center gap-[30px] pt-[40px] md:pt-[80px] pb-[80px] px-[20px] auto-show">
          <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
            Culture
          </h2>
          <p className="text-main-black text-[18px] text-center">
            We ardently believe failing is learning. If we are not failing, we
            are not doing it right.
          </p>
        </div>
        <div className="w-full flex flex-col gap-[100px] pt-[80px] border-t-[1px]">
          <h2 className="text-[48px] font-bold text-center w-full auto-show">
            Meet Our Founders
          </h2>
          <div className="flex flex-col items-center justify-center md:flex-row w-full gap-[80px]">
            <FounderImages />
          </div>
        </div>
      </div>
      <Milestones />
      <div>History</div>
      <div>Founder</div>
      <div>Team</div>
      <div>Culture</div>
    </section>
  );
};

export default AboutUsPage;
