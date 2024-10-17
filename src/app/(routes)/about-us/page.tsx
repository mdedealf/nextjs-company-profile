import { FC } from "react";
import Hero from "./Hero";
import Milestones from "./milestones";
import FounderImages from "@/components/FounderImages";

const AboutUsPage: FC = () => {
  return (
    <section className="w-full">
      <Hero />
      <div className="flex flex-col items-center justify-center w-full mb-[80px] gap-[60px] bg-main-white py-[120px] lg:px-[180px]">
        <div className="w-full flex flex-col gap-[20px]">
          <h2 className="text-[48px] font-bold text-start w-full">
            Meet the Founders
          </h2>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-[80px]">
          <FounderImages />
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
