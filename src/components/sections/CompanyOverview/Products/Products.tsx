import ProductsCards from "@/components/ProductsCards";
import Link from "next/link";
import { FC } from "react";

const Products: FC = () => {
  return (
    <div className="py-[40px] w-full">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px]">
          We build products that nations run on
        </h2>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px]">
          <Link href="/products">View all products</Link>
        </div>
      </div>

      <ProductsCards />
    </div>
  );
};

export default Products;
