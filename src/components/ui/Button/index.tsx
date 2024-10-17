import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { FC } from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const buttonVariants = cva(
  "py-2 px-4 rounded-full font-semibold hover:opacity-90 text-[16px]",
  {
    variants: {
      variant: {
        primary: "bg-main-green text-main-white px-[24px] py-[12px]",
        secondary: "bg-grayscale-700 text-main-white px-[24px] py-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

export default Button;
