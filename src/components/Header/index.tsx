"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import NavLink from "./NavLink/NavLink";
import { NAVBAR_LINKS } from "@/constant/navbarLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header: FC = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowNav = () => {
    setIsShowNav((prev) => !prev);
  };

  const handleCloseNav = () => {
    setIsShowNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 h-[80px] md:h-[100px] w-full flex justify-between items-center px-[16px] md:px-[140px] text-main-white transition-all ease-in duration-300 z-30",
        {
          "bg-main-black": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      {!isShowNav ? (
        <nav className="flex items-center justify-between w-full gap-[40px] transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <Image
                src="/images/gojek-logo.svg"
                alt="Logo"
                width={112}
                height={32}
                priority={true}
                className="h-[28px] w-[100px] md:h-auto md:w-auto"
              />
            </Link>
            <button
              className="md:hidden text-[18px]"
              aria-label="Open menu"
              onClick={handleShowNav}
            >
              <Bars3Icon className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end gap-[40px] w-full text-[18px] text-main-white">
            {NAVBAR_LINKS.map((nav, idx) => (
              <NavLink key={idx} path={nav.path} linkName={nav.linkName} />
            ))}
          </div>
        </nav>
      ) : (
        <nav className="md:hidden lg:hidden fixed top-0 right-0 w-full h-screen flex-col bg-black gap-9 transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between h-[80px] p-[16px]">
            <Image
              src="/images/gojek-logo.svg"
              alt="Logo"
              width={112}
              height={32}
              className="h-[28px] w-[100px] md:h-auto md:w-auto"
            />
            <button
              className="text-[18px]"
              aria-label="Close menu"
              onClick={handleShowNav}
            >
              <XMarkIcon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-7 px-[16px] py-[30px] text-[22px] text-main-white">
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
