import { FC } from "react";
import Hero from "./Hero";
import Product from "./Product";
import ProductLists from "./ProductsLists";
import { PRODUCTS_PAGE_LISTS } from "@/constant/productsPageLists";

const Products: FC = () => {
  return (
    <section className="w-full h-auto">
      <Hero />
      <Product />
      {PRODUCTS_PAGE_LISTS.map((product, idx) => (
        <ProductLists key={idx} {...product} />
      ))}
    </section>
  );
};

export default Products;
