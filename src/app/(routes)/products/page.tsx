import { FC } from "react";
import Hero from "./Hero";
import ProductLists from "./ProductsLists";
import ProductsCards from "@/components/ProductsCards";
import { PRODUCTS_PAGE_LISTS } from "@/constant/productsPageLists";

const Products: FC = () => {
  return (
    <section className="w-full h-auto">
      <Hero />
      <ProductsCards/>
      {PRODUCTS_PAGE_LISTS.map((product, idx) => (
        <ProductLists key={idx} {...product} />
      ))}
    </section>
  );
};

export default Products;
