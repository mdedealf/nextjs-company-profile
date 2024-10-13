import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex w-full h-[300px] text-main-white">
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
      <div>Footer</div>
    </footer>
  );
};

export default Footer;
