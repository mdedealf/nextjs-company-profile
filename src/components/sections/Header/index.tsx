import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="h-[80px] w-full flex justify-between items-center px-[40px]">
      <div>Logo</div>
      <nav className="flex items-center justify-between gap-[24px]">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/product-services">Products / Services</Link>
        <Link href="/teams">teams</Link>
      </nav>
    </header>
  );
};

export default Header;
