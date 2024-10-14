import useRandomUser from "@/hooks/useRandomUser";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Teams: FC = () => {
  const { data, error, isLoading } = useRandomUser();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col bg-main-white pt-[40px] pb-[80px] md:px-[180px] w-full">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-semibold text-center mx-[20px] text-main-black">
          Meet our teams
        </h2>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px]">
          <Link href="/teams">Visit our teams</Link>
        </div>
      </div>
      <div className="flex gap-[20px] overflow-x-scroll mx-[20px] mt-[60px]">
        {isLoading && (
          <div className="text-[20px] font-bold text-center w-full text-main-black">
            Loading...
          </div>
        )}
        {data?.map((user, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-[24px] items-center justify-center border py-[24px] px-[12px] rounded-[24px] min-w-[220px] md:w-auto"
          >
            <div className="h-[110px] w-[110px] md:w-[140px] md:h-[140px]">
              <Image
                src={user.picture.large}
                alt={user.name.first}
                width={110}
                height={110}
                priority={true}
                className="h-[110px] w-[110px] md:w-[140px] md:h-[140px] object-cover rounded-full"
              />
            </div>
            <div className="text-[20px] font-bold text-center text-main-black">
              {user.name.first} {user.name.last}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
