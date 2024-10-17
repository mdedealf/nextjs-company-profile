"use client";
import FounderImages from "@/components/FounderImages";
import useRandomUser from "@/hooks/useRandomUser";
import Image from "next/image";
import { FC } from "react";

const TeamMembers: FC = () => {
  const { data: teams, error, isLoading } = useRandomUser();

  if (error) return <div>Error</div>;
  if (isLoading)
    return (
      <div className="h-screen w-full text-center text-[26px] font-bold text-[#00880D] mt-[180px]">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen max-w-[1280px] flex flex-col md:items-center justify-center w-full gap-[60px] px-[20px] pt-[80px] pb-[120px]">
      <div className="flex flex-col w-full mb-[80px] gap-[60px]">
        <div className="w-full flex flex-col gap-[20px] auto-show">
          <h2 className="text-[48px] font-bold text-start w-full">
            Meet the Founders
          </h2>
          <p className="text-[18px] md:max-w-[65%]">
            Visionaries dedicated to transforming ideas into reality, driving
            innovation for a better tomorrow.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-[80px]">
          <FounderImages />
        </div>
      </div>

      <div className="w-full flex flex-col gap-[20px] auto-show">
        <h2 className="text-[48px] font-bold text-start w-full">
          Meet the Team
        </h2>
        <p className="text-[18px] md:max-w-[65%]">
          Behind every solution, there&#39;s a dedicated team driving
          innovation. We are passionate about connecting people, solving
          real-world problems, and creating seamless experiences for millions.
          Together, we push boundaries, one ride, one order, one solution at a
          time.
        </p>
      </div>
      <div className="flex flex-col w-full md:grid md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
        {teams?.map((team, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full md:pb-[40px] gap-[10px] cursor-pointer group"
          >
            <div className="min-h-[282px] max-h-auto w-full md:h-[282px] md:w-[282px] relative">
              <Image
                src={team.picture.large}
                alt={team.name.first}
                height={282}
                width={282}
                className="min-h-[282px] max-h-auto w-full md:h-[282px] md:w-[282px] md:grayscale-[85%] object-cover rounded-[12px] transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="absolute top-0 h-full w-full bg-main-black opacity-10 group-hover:opacity-0 rounded-[12px] transition-all duration-300" />
            </div>
            <div className="flex flex-col w-full justify-start">
              <span className="text-[20px] font-extrabold mb-[6px]">
                {team.name.first} {team.name.last}
              </span>

              <p className="flex items-center gap-[10px] text-[18px]">
                {team.jobRole}
              </p>
              <p className="flex text-[14px] items-center gap-[10px] font-light">
                {team.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
