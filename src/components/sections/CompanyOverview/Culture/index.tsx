import { FC } from "react";

const Culture: FC = () => {
  return (
    <div className="flex flex-col w-full items-center gap-[30px] pt-[40px] md:pt-[80px] pb-[80px] px-[20px] auto-show">
      <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
        Culture
      </h2>
      <p className="text-main-black text-[18px] text-center">
        We ardently believe failing is learning. If we are not failing, we are
        not doing it right.
      </p>
    </div>
  );
};

export default Culture;
