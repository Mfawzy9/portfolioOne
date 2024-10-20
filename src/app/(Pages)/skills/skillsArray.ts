import NpmLight from "@/app/_Components/skillsIcons/NpmLight";
import Bootstrap from "../../_Components/skillsIcons/Bootstrap";
import CSS from "../../_Components/skillsIcons/CSS";
import Git from "../../_Components/skillsIcons/Git";
import GithubDark from "../../_Components/skillsIcons/Github-Dark";
import GithubLight from "../../_Components/skillsIcons/Github-Light";
import HTML from "../../_Components/skillsIcons/HTML";
import JavaScript from "../../_Components/skillsIcons/JavaScript";
import JQuery from "../../_Components/skillsIcons/JQuery";
import MaterialUI from "../../_Components/skillsIcons/MaterialUI";
import NextJsDark from "../../_Components/skillsIcons/NextJS-Dark";
import NextJsLight from "../../_Components/skillsIcons/NextJS-Light";
import Npm from "../../_Components/skillsIcons/Npm-Dark";
import ReactIcon from "../../_Components/skillsIcons/React";
import Redux from "../../_Components/skillsIcons/Redux";
import Sass from "../../_Components/skillsIcons/Sass";
import TailwindCSS from "../../_Components/skillsIcons/TailwindCSS";
import TypeScript from "../../_Components/skillsIcons/TypeScript";
import Vite from "../../_Components/skillsIcons/Vite";
import FramerMotion from "@/app/_Components/skillsIcons/FramerMotion";
import ReactQuery from "@/app/_Components/skillsIcons/ReactQuery";
import Formik from "@/app/_Components/skillsIcons/Formik";

interface Iskills {
  skill: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  lightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const skillsArray: Iskills[] = [
  {
    skill: "React.JS",
    icon: ReactIcon,

    link: "https://react.dev/",
  },
  {
    skill: "Next.JS",
    icon: NextJsLight,
    lightIcon: NextJsDark,
    link: "https://nextjs.org/",
  },
  {
    skill: "HTML",
    icon: HTML,
    link: "https://html.com/",
  },
  {
    skill: "CSS",
    icon: CSS,
    link: "https://www.w3.org/Style/CSS/",
  },
  {
    skill: "JavaScript",
    icon: JavaScript,
    link: "https://www.javascript.com/",
  },
  {
    skill: "Bootstrap",
    icon: Bootstrap,
    link: "https://getbootstrap.com/",
  },
  {
    skill: "TypeScript",
    icon: TypeScript,
    link: "https://www.typescriptlang.org/",
  },
  {
    skill: "TailwindCSS",
    icon: TailwindCSS,
    link: "https://tailwindcss.com/",
  },
  {
    skill: "MaterialUI",
    icon: MaterialUI,
    link: "https://mui.com/",
  },
  {
    skill: "Sass",
    icon: Sass,
    link: "https://sass-lang.com/",
  },
  {
    skill: "Formik",
    icon: Formik,
    link: "https://formik.org/",
  },
  {
    skill: "Git",
    icon: Git,
    link: "https://git-scm.com/",
  },
  {
    skill: "GitHub",
    icon: GithubDark,
    lightIcon: GithubLight,
    link: "https://github.com/",
  },

  {
    skill: "Framer Motion",
    icon: FramerMotion,
    link: "https://www.framer.com/motion/",
  },
  {
    skill: "React Query",
    icon: ReactQuery,
    link: "https://react-query.tanstack.com/",
  },
  {
    skill: "Redux",
    icon: Redux,
    link: "https://redux.js.org/",
  },
  {
    skill: "JQuery",
    icon: JQuery,
    link: "https://jquery.com/",
  },
  {
    skill: "Vite",
    icon: Vite,
    link: "https://vitejs.dev/",
  },
  {
    skill: "NPM",
    icon: Npm,
    lightIcon: NpmLight,
    link: "https://www.npmjs.com/",
  },
];

export default skillsArray;
