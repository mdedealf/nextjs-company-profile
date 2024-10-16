"use client";
import useRandomUser from "@/hooks/useRandomUser";
import Image from "next/image";
import { FC } from "react";

const TeamMembers: FC = () => {
  const { data: teams, error, isLoading } = useRandomUser();

  if (error) return <div>Error</div>;
  if (isLoading)
    return (
      <div className="h-screen w-full text-center text-[26px] font-bold text-[#00880D]">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen max-w-[1280px] flex md:items-center justify-center w-full px-[20px]">
      <div className="flex flex-col w-full md:grid md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
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
              <span className="text-[18px] font-extrabold group-hover:text-[#00880D] mb-[6px]">
                {team.name.first} {team.name.last}
              </span>

              <p className="flex items-center gap-[10px] text-[16px] font-normal">
                {team.jobRole}
              </p>
              <p className="flex text-[13px] items-center gap-[10px] font-light">
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
