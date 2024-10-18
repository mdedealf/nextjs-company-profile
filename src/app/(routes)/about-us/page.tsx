import { FC } from "react";
import Hero from "./Hero";
import Milestones from "./milestones";
import HistoryValues from "@/components/HistoryValues";
import Teams from "@/components/Teams/Teams";

const AboutUsPage: FC = () => {
  return (
    <section className="w-full h-auto">
      <Hero />
      <div className="flex flex-col items-center justify-center w-full mb-[80px] gap-[60px] bg-main-white pt-[80px] pb-[120px] md:px-[120px] lg:px-[180px]">
        <div className="flex flex-col w-full items-center gap-[30px] pt-[40px] md:pt-[80px] pb-[80px] px-[20px] auto-show">
          <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
            Culture
          </h2>
          <p className="text-main-black text-[18px] text-center">
            We ardently believe failing is learning. If we are not failing, we
            are not doing it right.
          </p>
        </div>
        <HistoryValues />
        <Teams />
      </div>
      <Milestones />
    </section>
  );
};

export default AboutUsPage;
