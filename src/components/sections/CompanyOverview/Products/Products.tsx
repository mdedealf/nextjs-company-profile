import ProductsCards from "@/components/ProductsCards";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ProductsProps {
  style?: string;
}

const Products: FC<ProductsProps> = ({ style }) => {
  return (
    <div className={cn(style, "py-[40px] w-full")}>
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px] auto-show">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px]">
          We build products that nations run on
        </h2>

        <Button>
          <Link href="/products">View all products</Link>
        </Button>
      </div>

      <ProductsCards />
    </div>
  );
};

export default Products;
