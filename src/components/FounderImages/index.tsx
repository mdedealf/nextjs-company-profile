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
        <div key={idx} className="flex flex-col items-center gap-[20px]">
          <div>
            <Image
              src={founder.image}
              alt={founder.name}
              width={340}
              height={340}
              className="h-[340px] w-[340px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-main-black text-[26px] font-bold">
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
