import Link from "next/link";
import { FC } from "react";

interface NavLink {
  path: string;
  linkName: string;
  onClick?: () => void;
}

const NavLink: FC<NavLink> = ({ path, linkName, onClick }) => {
  return (
    <Link
      className="hover:underline font-semibold"
      href={path}
      onClick={onClick}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
