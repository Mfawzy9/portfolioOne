"use client";
import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";
import { ILinks } from "@/app/Interfaces/IRightBar";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";

const links: ILinks[] = [
  { lable: "Home", path: "/", icon: <FaHome /> },
  { lable: "About", path: "/about", icon: <FaUser /> },
  { lable: "Skills", path: "/skills", icon: <FaCogs /> },
  {
    lable: "Projects",
    path: "/projects",
    icon: <FaShapes />,
  },
  {
    lable: "Contact",
    path: "/contact",
    icon: <FaEnvelopeOpenText />,
  },
];

const RightBar = () => {
  const { handleNavigate } = useLoaderProvider();
  const path = usePathname();

  return (
    <nav
      className="fixed z-30 bottom-0 left-0 right-0 me-3 flex justify-center px-5 md:bottom-auto
        md:left-auto md:top-1/2 md:-translate-y-1/2 md:px-1 md:py-2"
    >
      <ul
        className="flex flex-row items-center justify-center gap-2 rounded bg-black/20 p-2
          backdrop-blur-sm shadow-md shadow-ring dark:bg-gray-800/60 md:flex-col md:gap-0
          md:space-y-4"
      >
        {links.map((link) => (
          <li key={link.lable}>
            <button
              onClick={() => handleNavigate(link.path)}
              className={`relative group block rounded-full border-b-2 border-gray-700 p-3 text-xl
              hover:border-ring hover:text-ring dark:border-gray-500 dark:hover:border-ring
              dark:hover:text-ring lg:text-[22px]
              ${path === link.path ? "active border-ring dark:border-ring" : ""}`}
            >
              {link.icon}
              <span
                className="absolute -right-5 top-1/2 -z-50 hidden bg-ring -translate-y-1/2 rounded py-1
                  px-2 font-bold text-white text-base invisible group-hover:visible opacity-0
                  transition-all duration-300 group-hover:right-16 group-hover:opacity-100
                  md:block"
              >
                {link.lable}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(RightBar);
