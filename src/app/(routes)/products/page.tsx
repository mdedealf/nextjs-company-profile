import { FC } from "react";
import Hero from "./Hero";
import ProductLists from "./ProductsLists";
import ProductsCards from "@/components/ProductsCards";
import { PRODUCTS_PAGE_LISTS } from "@/constant/productsPageLists";
import Testimonials from "@/components/Testimonials/Testimonials";

const Products: FC = () => {
  return (
    <section className="w-full h-auto">
      <Hero />
      <div className="flex flex-col w-full items-center gap-[12px] pt-[50px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-white">
          We build products that nations run on
        </h2>
      </div>
      <ProductsCards />
      {PRODUCTS_PAGE_LISTS.map((product, idx) => (
        <ProductLists key={idx} {...product} />
      ))}
      <Testimonials />
    </section>
  );
};

export default Products;
