import Content from "@/app/_Components/Content/Content";
import Title from "@/app/_Components/Title/Title";
import { ProjectsCard } from "@/app/_Components/ProjectsCard/ProjectsCard";
import dynamic from "next/dynamic";
import CursorsContainer from "@/app/_Components/CursorEffects/CursorsContainer";

const VisibilityHandler = dynamic(
  () => import("../../_Components/VisibilityHandler"),
  { ssr: false },
);

export const generateMetadata = () => {
  return {
    title: "Projects | Mahmoud Fawzy",
    description: "all projects of Mahmoud Fawzy",
  };
};

const Projects = () => {
  return (
    <>
      <CursorsContainer />
      <VisibilityHandler />
      <section className="min-h-screen pb-20 lg:pb-4 container">
        <Content>
          <Title primary="my" span="works" secondary="projects" />
        </Content>
        <ProjectsCard />
      </section>
    </>
  );
};

export default Projects;
