import Link from "next/link";
import { FC } from "react";
import Milestones from "./Milestones/Milestones";
import Achievements from "./Achievements/Achievements";
import Products from "./Products/Products";
import Testimonials from "./Testimonials/Testimonials";
import Teams from "./Teams/Teams";

const CompanyOverview: FC = () => {
  return (
    <section className="h-auto w-full text-main-white transition-all duration-300">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[60px]">
        <h2 className="text-[26px] md:text-[48px] font-semibold text-center mx-[20px]">
          We&#39;re Gojek, the drivers of change
        </h2>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px]">
          <Link href="/about-us">More About Us</Link>
        </div>
      </div>

      <div className="bg-main-white rounded-t-[80px] w-full md:mt-[60px] mt-[20px]">
        <Milestones />
        <Achievements />
        <Teams />
      </div>
      <Products />
      <Testimonials />

      <div>Culture</div>
    </section>
  );
};

export default CompanyOverview;
