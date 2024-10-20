import Content from "@/app/_Components/Content/Content";
import CursorEffect from "@/app/_Components/CursorEffect/CursorEffect";
import Title from "@/app/_Components/Title/Title";
import { SkillsCard } from "@/components/ui/SkillsCard";
import dynamic from "next/dynamic";

const VisibilityHandler = dynamic(
  () => import("../../_Components/VisibilityHandler"),
  { ssr: false },
);

export const generateMetadata = () => {
  return {
    title: "Skills | Mahmoud Fawzy",
    description: "all skills that Mahmoud Fawzy has learned",
  };
};

const Skills = () => {
  return (
    <>
      <CursorEffect />
      <VisibilityHandler />
      <section className="min-h-screen pb-20 lg:pb-0 container flex flex-col justify-center items-center">
        <Content className="min-w-full">
          <Title
            className=""
            primary="my"
            span="skills"
            secondary="what i do"
            spanClassName="!text-[120px]"
          />
        </Content>
        <div className="flex items-center h-full w-full justify-center">
          <SkillsCard />
        </div>
      </section>
    </>
  );
};

export default Skills;
