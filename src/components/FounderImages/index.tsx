import Image from "next/image";
import { FC } from "react";

const FounderImages: FC = () => {
  const GOJEK_FOUNDERS = [
    {
      name: "Nadiem Makarim",
      title: "Gojek Co-Founders",
      image: "/images/founders/nadiem-makarim.png",
    },
    {
      name: "Kevin Aluwi",
      title: "Gojek Co-Founders",
      image: "/images/founders/kevin-aluwi.png",
    },
  ];

  return (
    <>
      {GOJEK_FOUNDERS.map((founder, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-[20px] group cursor-pointer"
        >
          <div className="min-h-[282px] max-h-auto w-full md:h-[282px] md:w-[282px] relative">
            <Image
              src={founder.image}
              alt={founder.name}
              height={282}
              width={282}
              className="min-h-[282px] max-h-auto w-full md:h-[282px] md:w-[282px] md:grayscale-[85%] object-cover rounded-[12px] transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="absolute top-0 h-full w-full bg-main-black opacity-10 group-hover:opacity-0 rounded-[12px] transition-all duration-300" />
          </div>
          <div className="flex flex-col w-full">
            <span className="text-main-black text-[20px] font-extrabold">
              {founder.name}
            </span>
            <p className="text-[18px] text-main-black">{founder.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FounderImages;
