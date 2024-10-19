import Link from "next/link";
import { FC } from "react";
import Milestones from "./Milestones/Milestones";
import Achievements from "./Achievements/Achievements";
import Products from "./Products/Products";
import Testimonials from "@/components/Testimonials/Testimonials";
import Teams from "@/components/Teams/Teams";
import Button from "@/components/ui/Button";
import Culture from "./Culture";
import HistoryValues from "@/components/HistoryValues";
import "./index.css";
import AnimatedProducts from "./AnimatedProducts/AnimatedProducts";

const CompanyOverview: FC = () => {
  return (
    <section className="h-auto w-full text-main-white transition-all duration-300">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[60px] auto-show">
        <h2 className="text-[26px] md:text-[48px] font-semibold text-center mx-[20px]">
          We&#39;re ngojol, the drivers of change
        </h2>
        <Button>
          <Link href="/about-us">More About Us</Link>
        </Button>
      </div>

      <div className="bg-main-white rounded-t-[80px] w-full md:mt-[60px] mt-[20px]">
        <Milestones />
        <Achievements />
        <Culture />
        <HistoryValues />
        <Teams />
      </div>

      <AnimatedProducts />
      <Products style="md:hidden" />
      <Testimonials />
    </section>
  );
};

export default CompanyOverview;
