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
          <p className="text-[18px] font-normal">
            The journey of us began with a simple idea: to make transportation
            and deliveries more accessible, efficient, and safe for everyone.
            Founded in 2010, our mission was clear from the start—revolutionize
            the way people move and receive goods by leveraging technology. We
            started small, offering taxi services in Indonesia, but quickly grew
            as more people saw the convenience of booking rides through a mobile
            app. As our user base expanded, so did our vision. We introduced
            delivery services, enabling customers to send and receive packages
            quickly, safely, and affordably. Whether it ss getting a ride or
            having groceries delivered, we aimed to provide solutions that
            simplified daily life
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[20px] md:text-[28px] font-bold">Values</h3>
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
