import { FC } from "react";
import Hero from "./Hero";
import TeamMembers from "./TeamMembers";

const TeamsPage: FC = () => {
  return (
    <section className="h-auto w-full bg-main-white">
      <Hero />
      <TeamMembers />
    </section>
  );
};

export default TeamsPage;
