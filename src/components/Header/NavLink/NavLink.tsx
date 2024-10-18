import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavLink {
  path: string;
  linkName: string;
  onClick?: () => void;
}

const NavLink: FC<NavLink> = ({ path, linkName, onClick }) => {
  const pathname = usePathname();
  const isPathActive = pathname === path;

  return (
    <Link
      className="group relative font-semibold text-[18px]"
      href={path}
      onClick={onClick}
    >
      {linkName}
      <span
        className={`absolute left-0 bottom-[-6px] h-[2px] bg-main-white transition-all duration-200 ${
          isPathActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

export default NavLink;
