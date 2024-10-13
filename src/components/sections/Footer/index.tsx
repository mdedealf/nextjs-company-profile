import { FOOTER_MENUS, FOOTER_SOCIALS } from "@/constant/footerDatas";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full h-auto text-main-white">
      <div className="flex flex-col gap-[54px] md:px-[180px] md:py-[120px] px-[18px]">
        <div>
          <Image
            src="/images/gojek-logo.svg"
            alt="gojek logo"
            width={112}
            height={32}
            priority={true}
            className="h-auto w-auto"
          />
        </div>
        <div className="grid grid-cols-2 gap-[32px]  md:grid-cols-5">
          {FOOTER_MENUS.map((menu, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-[14px] text-[16px] font-light"
            >
              <h4 className="text-[18px] font-semibold">{menu.title}</h4>
              {menu.submenu.map((sub) => (
                <span>{sub}</span>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[18px]">
              <h4 className="text-[18px] font-semibold">Connect with us</h4>
              <ul className="flex gap-4 list-none p-0 m-0">
                {FOOTER_SOCIALS.map((social, idx) => (
                  <li key={idx} className="no-underline">
                    <a href="">
                      <Image
                        src={social.image}
                        alt={social.alt}
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[18px]">
              <h4 className="text-[18px] font-semibold">Download the app</h4>
              <button className="w-[140px] md:w-[180px] py-[8px] font-normal rounded-full bg-main-white text-main-black">
                App store
              </button>
              <button className="w-[140px] md:w-[180px] py-[8px] font-normal rounded-full bg-main-white text-main-black">
                Playstore
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
