import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import FounderImages from "@/components/FounderImages";

const Teams: FC = () => {
  return (
    <div className="flex flex-col bg-main-white pb-[120px] md:px-[180px] w-full">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
          Meet our founders
        </h2>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px]">
          <Link href="/teams">See more our teams</Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center px-[20px] gap-[100px] md:gap-[140px] mt-[80px]">
        <FounderImages />
      </div>
    </div>
  );
};

export default Teams;
