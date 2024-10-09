import { FC } from "react";
import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductOrServices from "@/components/sections/ProductsOrServices";
import Testimonials from "@/components/sections/Testimonials";
import AboutUs from "@/components/sections/AboutUs";

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <CompanyOverview />
      <ProductOrServices />
      <Testimonials />
      <AboutUs />
    </main>
  );
};

export default HomePage;
