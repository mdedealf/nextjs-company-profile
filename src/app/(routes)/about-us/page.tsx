import { FC } from "react";
import Hero from "./Hero";
import Milestones from "./milestones";

const AboutUsPage: FC = () => {
  return (
    <section className="w-full">
      <Hero />
      <Milestones />
      <div>History</div>
      <div>Founder</div>
      <div>Team</div>
      <div>Culture</div>
    </section>
  );
};

export default AboutUsPage;
