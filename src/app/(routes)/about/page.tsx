import { FC } from "react";
import Hero from "./Hero";
import Milestones from "./milestones";

const AboutUsPage: FC = () => {
  return (
    <section className="w-full">
      <Hero />
      <Milestones/>
    </section>
  );
};

export default AboutUsPage;
