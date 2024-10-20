import { IProject, projectsArr } from "@/app/(Pages)/projects/projectsArr";
import { motion } from "framer-motion";
import { memo, useState } from "react";

export const ProjectsTabs = memo(function ProjectsTabs({
  setFilteredArr,
}: {
  setFilteredArr: React.Dispatch<React.SetStateAction<IProject[]>>;
}) {
  const ProjectsCategories = projectsArr.map((project) => project.category);
  const categories = [...new Set(ProjectsCategories)];
  const categoriesWithAll = [...categories, "All"];
  const [activeTab, setActiveTab] = useState("All");

  const handleFilter = (category: string) => {
    if (category === "All") {
      setFilteredArr(projectsArr);
    } else {
      setFilteredArr(
        projectsArr.filter((project) => project.category === category),
      );
    }
  };

  return (
    <>
      <ul
        className="max-w-md mx-auto flex flex-wrap items-center justify-center
          bg-primary-foreground rounded-3xl px-1 py-3 sm:p-3 relative overflow-hidden"
      >
        {categoriesWithAll.reverse().map((_category, idx) => (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + idx * 0.2 }}
            key={_category}
            className={
              " relative text-xs sm:text-base font-semibold px-2 sm:px-2.5 py-1 rounded-3xl"
            }
          >
            {activeTab === _category && (
              <motion.span
                layoutId="activeTab"
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                }}
                className="absolute inset-0 bg-ring"
                style={{ borderRadius: 9999 }}
              />
            )}
            <button
              className={`relative z-10 ${activeTab === _category ? "" : "hover:text-ring transition-all"}`}
              onClick={() => {
                setActiveTab(_category);
                handleFilter(_category);
              }}
            >
              {_category}
            </button>
          </motion.li>
        ))}
      </ul>
    </>
  );
});
