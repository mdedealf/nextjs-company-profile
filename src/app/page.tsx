"use client";
import { FC } from "react";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <CompanyOverview />
    </main>
  );
};

export default HomePage;
