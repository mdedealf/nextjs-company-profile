import useRandomUser from "@/hooks/useRandomUser";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Teams: FC = () => {
  const { data, error, isLoading } = useRandomUser();

  return (
    <div className="flex flex-col bg-main-white pb-[120px] md:px-[180px] w-full">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-semibold text-center mx-[20px] text-main-black">
          Meet our teams
        </h2>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px]">
          <Link href="/teams">Visit our teams</Link>
        </div>
      </div>
      <div className="flex gap-[20px] overflow-x-scroll mx-[20px] mt-[60px]">
        {error && (
          <div className="text-[20px] font-bold text-center w-full text-main-black h-[240px]">
            Can&#39;t get the data
          </div>
        )}
        {isLoading && (
          <div className="text-[20px] font-bold text-center w-full text-main-black h-[240px]">
            Loading...
          </div>
        )}
        {data?.map((user, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-[24px] items-center justify-center border py-[24px] px-[12px] rounded-[24px] min-w-[200px]  md:min-w-[260px] md:w-auto h-auto"
          >
            <div className="h-[160px] w-[160px] md:w-[200px] md:h-[200px]">
              <Image
                src={user.picture.large}
                alt={user.name.first}
                width={200}
                height={200}
                priority={true}
                className="h-[160px] w-[160px] md:w-[200px] md:h-[200px] object-cover rounded-[18px]"
              />
            </div>
            <div className="px-[12px] text-[20px] font-bold text-left text-main-black w-full">
              {user.name.first} {user.name.last}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
