import Content from "@/app/_Components/Content/Content";
import { FaArrowUp } from "react-icons/fa";
import SocialIcons from "@/app/_Components/SocialIcons/SocialIcons";
import HireMe from "./HireMe";
import Navigate from "@/app/_Components/Navigate/Navigate";
import dynamic from "next/dynamic";
import CursorEffect from "@/app/_Components/CursorEffect/CursorEffect";
import HomeImg from "./HomeImg";

const VisibilityHandler = dynamic(
  () => import("../../_Components/VisibilityHandler"),
  { ssr: false },
);

export const generateMetadata = () => {
  return {
    title: "Home | Mahmoud Fawzy",
    description: "Brief about Mahmoud Fawzy",
  };
};

export default function Home() {
  return (
    <>
      <CursorEffect />
      <VisibilityHandler />
      <HireMe />
      <section
        className="px-1 sm:container flex flex-col justify-center min-h-screen pt-28 sm:pt-5 pb-20
          lg:pb-0"
      >
        <section
          className="grid lg:grid-cols-2 text-center lg:text-start items-center w-full md:px-16
            lg:px-0 lg:pe-3"
        >
          <Content>
            <div className="mx-auto w-60 h-60 lg:w-full lg:h-full mb-3 lg:mb-0">
              <HomeImg />
            </div>
          </Content>
          <div className="flex flex-col gap-3">
            <Content>
              <h2 className="text-3xl sm:text-6xl font-bold text-ring uppercase">
                Mahmoud Fawzy
              </h2>{" "}
            </Content>
            <Content>
              <h3 className="text-xl sm:text-3xl font-bold text-secondary-foreground uppercase">
                Front-End Developer
              </h3>{" "}
            </Content>
            <Content>
              <p className="!leading-relaxed sm:text-lg">
                React.js and Next.js developer with a focus on front-end
                technologies. Skilled in building responsive web applications
                and RESTful APIs. good problem solving abilities and a passion
                for clean, efficient code.
              </p>
            </Content>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <Content>
                <Navigate link="/about">
                  <span
                    className="font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-ring
                      backdrop-blur-md lg:font-semibold isolation-auto border-ring before:absolute
                      before:w-full before:transition-all before:duration-700 before:hover:w-full
                      before:-left-full before:hover:left-0 before:rounded-xl before:bg-[#FFFFFF]
                      hover:text-black before:-z-10 before:aspect-square before:hover:scale-200
                      before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2
                      rounded-xl group"
                  >
                    More About Me
                    <FaArrowUp
                      className="w-8 h-8 text-white bg-ring justify-end group-hover:rotate-90 ease-linear
                        duration-300 rounded-full border group-hover:border-gray-700 p-2 rotate-45"
                    />
                  </span>
                </Navigate>
              </Content>
              <SocialIcons />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
