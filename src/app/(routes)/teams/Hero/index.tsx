import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="h-screen max-w-[1220px] w-full flex flex-col justify-center mt-[100px]">
      <div className="flex flex-col md:flex-row items-center w-full justify-between gap-[40px]">
        <div className="flex flex-col gap-[20px] p-[20px]">
          <h1 className="w-full text-[26px] md:text-[46px] font-bold min-w-auto max-w-[600px] text-main-black">
            Meet the Minds Behind the Movement
          </h1>
          <p className="text-[14px] md:text-[18px] max-w-[700px] text-main-black">
            At Gojek, our teams are the driving force behind transformative
            innovations. Get to know the passionate individuals who are
            redefining convenience and shaping the future of everyday services.
          </p>
        </div>
        <div className="bg-[#00aa13] mx-[20px] md:w-[50%] rounded-[40px] flex items-end justify-end">
          <Image
            src="/images/gojek-cta.svg"
            alt="gojek"
            width={400}
            height={220}
            className="h-[220px] w-auto rounded-br-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
