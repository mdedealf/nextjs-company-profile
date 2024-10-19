import { HISTORY_DATA } from "@/constant/historyData";
import { VALUES_DATA } from "@/constant/valuesDatas";
import { FC } from "react";

const HistoryValues: FC = () => {
  return (
    <div className="flex flex-col w-full items-center gap-[80px] pt-[40px] md:pt-[80px] pb-[80px] px-[20px] border-t-[1px]">
      <div className=" auto-show">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
          Know more about us
        </h2>
      </div>
      <div className="max-w-5xl flex flex-col md:grid md:grid-cols-2 gap-[40px] text-main-black ">
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[24px] md:text-[28px] font-bold">History</h3>
          <p className="text-[18px] font-normal">{HISTORY_DATA}</p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[24px] md:text-[28px] font-bold">Values</h3>
          {VALUES_DATA.map((value, idx) => (
            <div key={idx} className="flex flex-col gap-[10px]">
              <h4 className="text-[18px] font-semibold">{value.title}</h4>
              <p className="text-[18px] font-normal">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryValues;
