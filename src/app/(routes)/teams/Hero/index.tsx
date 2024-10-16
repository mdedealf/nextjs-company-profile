import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="min-h-[500px] max-w-[1220px] w-full flex flex-col justify-center mt-[100px]">
      <div className="flex flex-col items-start justify-center gap-[24px] px-[20px]">
        <h1 className="w-full text-[26px] md:text-[46px] font-bold min-w-auto max-w-[600px] text-main-black">
          Meet the Minds Behind the Movement
        </h1>
        <p className="text-[14px] md:text-[18px] max-w-[700px] text-main-black">
          At Gojek, our teams are the driving force behind transformative
          innovations. Get to know the passionate individuals who are redefining
          convenience and shaping the future of everyday services.
        </p>
      </div>
    </div>
  );
};

export default Hero;
