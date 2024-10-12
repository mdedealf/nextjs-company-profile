"use client";
import Image from "next/image";
import { FC, useState } from "react";
import NavLink from "./NavLink/NavLink";
import { NAVBAR_LINKS } from "@/constant/navbarLinks";

const Header: FC = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav((prev) => !prev);
  };

  const handleCloseNav = () => {
    setIsShowNav(false);
  };

  return (
    <header className="fixed top-0 h-[80px] md:h-[100px] w-full flex justify-between items-center px-[16px] md:px-[40px] bg-main-black text-main-white transition-all ease-in delay-300 z-30">
      {!isShowNav ? (
        <nav className="flex items-center justify-between w-full gap-[40px] transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between w-full">
            <Image
              src="/images/gojek-logo.svg"
              alt="Logo"
              width={112}
              height={32}
              className="h-[28px] w-[100px] md:h-auto md:w-auto"
            />
            <span className="md:hidden text-[18px]" onClick={handleShowNav}>
              =
            </span>
          </div>
          <div className="hidden md:flex items-center justify-end gap-[40px] w-full text-[18px] text-main-white">
            {NAVBAR_LINKS.map((nav, idx) => (
              <NavLink key={idx} path={nav.path} linkName={nav.linkName} />
            ))}
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 right-0 w-full h-screen flex-col bg-black gap-9 transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between h-[80px] p-[40px]">
            <Image
              src="/images/gojek-logo.svg"
              alt="Logo"
              width={112}
              height={32}
              className="h-[28px] w-[100px] md:h-auto md:w-auto"
            />
            <span className="text-[18px]" onClick={handleShowNav}>
              X
            </span>
          </div>
          <div className="flex flex-col justify-center gap-5 p-[40px] text-[18px] text-main-white">
            {NAVBAR_LINKS.map((nav, idx) => (
              <NavLink
                key={idx}
                path={nav.path}
                linkName={nav.linkName}
                onClick={handleCloseNav}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
