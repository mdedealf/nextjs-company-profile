"use client";
import useRandomUser from "@/hooks/useRandomUser";
import { BriefcaseIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

const TeamMembers: FC = () => {
  const { data: teams, error, isLoading } = useRandomUser();

  if (error) return <div>Error</div>;
  if (isLoading) return <div className="h-screen w-full text-center text-[26px] font-bold text-[#00880D]">Loading...</div>;

  return (
    <div className="min-h-screen max-w-[1280px] flex items-center justify-center w-full px-[20px]">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-[30px]">
        {teams?.map((team, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full md:pb-[60px] gap-[10px] cursor-pointer group"
          >
            <div className="relative">
              <Image
                src={team.picture.large}
                alt={team.name.first}
                height={158}
                width={158}
                className="h-[320px] w-[320px] object-cover rounded-[20px]"
              />
              <div className="absolute top-0 h-full w-full bg-main-black opacity-30 group-hover:opacity-10 rounded-[20px]" />
            </div>
            <div className="flex flex-col w-full justify-start">
              <span className="text-[24px] font-bold mb-[6px] group-hover:text-[#00880D]">
                {team.name.first} {team.name.last}
              </span>

              <p className="flex items-center gap-[10px] text-[18px] font-normal">
                <BriefcaseIcon className="w-4 h-4" /> {team.jobRole}
              </p>
              <p className="flex items-center gap-[10px] font-light">
                <PhoneIcon className="w-4 h-4" />
                {team.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
