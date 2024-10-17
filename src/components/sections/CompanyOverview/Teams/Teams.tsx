import { FC } from "react";
import Link from "next/link";
import FounderImages from "@/components/FounderImages";
import Button from "@/components/ui/Button";

const Teams: FC = () => {
  return (
    <div className="flex flex-col bg-main-white pb-[120px] md:px-[180px] w-full">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
          Meet our founders
        </h2>
        <Button>
          <Link href="/teams">See more our teams</Link>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center px-[20px] gap-[100px] md:gap-[140px] mt-[80px]">
        <FounderImages />
      </div>
    </div>
  );
};

export default Teams;
