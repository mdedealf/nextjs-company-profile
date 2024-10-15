"use client";
import { FC } from "react";
import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import AboutUs from "@/components/sections/AboutUs";

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <CompanyOverview />
      <AboutUs />
    </main>
  );
};

export default HomePage;
