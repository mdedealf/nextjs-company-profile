"use client"
import { FC } from "react";
import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import AboutUs from "@/components/sections/AboutUs";
import QueryClientWraper from "@/components/QueryClientWraper";

const HomePage: FC = () => {
  return (
    <main>
      <QueryClientWraper>
        <Hero />
        <CompanyOverview />
        <AboutUs />
      </QueryClientWraper>
    </main>
  );
};

export default HomePage;
