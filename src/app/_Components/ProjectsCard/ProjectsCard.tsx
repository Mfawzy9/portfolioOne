"use client";
import { IProject, projectsArr } from "@/app/(Pages)/projects/projectsArr";
import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectsTabs } from "../ProjectsTabs/ProjectsTabs";
import ProjectModal from "../ProjectModal/ProjectModal";

export const ProjectsCard = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filteredArr, setFilteredArr] = useState<IProject[]>(projectsArr);

  const [modal, setModal] = useState(false);
  const [ModalProject, setModalProject] = useState<IProject>(projectsArr[0]);

  const [delay, setDelay] = useState<boolean>(true);
  const { loading } = useLoaderProvider();

  const openModal = () => {
    setModal(true);
    document.body.classList.add("overflow-y-hidden");
  };

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 200);

    return () => {
      setDelay(true);
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);
  return (
    <div className="mt-10">
      <ProjectModal modal={modal} setModal={setModal} project={ModalProject} />
      <ProjectsTabs setFilteredArr={setFilteredArr} />
      <div className="overflow-hidden mt-5">
        <motion.div
          layout
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 ",
            className,
          )}
        >
          <AnimatePresence>
            {filteredArr.map((_project, idx) => (
              <motion.div
                key={_project.id}
                layout
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "20px" }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  layout: {
                    duration: delay ? 1 : 0.45,
                    ease: "easeInOut",
                    delay: loading ? 2.2 : delay ? 0.4 : 0,
                  },
                  opacity: {
                    duration: delay ? 1 : 0.45,
                    ease: "easeInOut",
                    delay: loading ? 2.2 : delay ? 0.4 : 0,
                  },
                  scale: {
                    duration: delay ? 1 : 0.45,
                    ease: "easeInOut",
                    delay: loading ? 2.2 : delay ? 0.4 : 0,
                  },
                }}
                className="relative z-10 group block p-3 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  openModal();
                  setModalProject(_project);
                }}
                role="button"
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="hoverEffect"
                      className="absolute inset-0 h-full w-full bg-secondary-foreground dark:bg-gray-500 block
                        rounded"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                <div
                  className="flex flex-col justify-center items-center gap-5 bg-primary-foreground
                    overflow-hidden shadow-[0_0_6px_0px] shadow-ring relative z-20 rounded"
                >
                  <Image
                    priority
                    src={_project.img}
                    width={450}
                    height={250}
                    alt={_project.title}
                    className="w-full group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="flex flex-wrap w-full justify-between items-center px-3 pb-2">
                    <ul className="flex gap-1">
                      {_project.technologiesIcons
                        .slice(0, 4)
                        .map((Icon, idx) => (
                          <li
                            title={`${String(Icon?.name?.toString())}`}
                            key={Icon.name + idx}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border p-2 border-muted-foreground/40
                              bg-black/80"
                          >
                            <Icon className="w-full h-full" />
                          </li>
                        ))}
                    </ul>
                    <h4 className="font-bold italic">{_project.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

// key={_project.id}
// layout
// initial={{ opacity: 0, transform: "scale(0)" }}
// animate={{ opacity: 1, transform: "scale(1)" }}
// // whileInView={{ opacity: 1, transform: "scale(1)" }}
// // viewport={{ once: true, margin: "10px" }}
// exit={{ opacity: 0, transform: "scale(0)" }}
// transition={{
//   duration: delay ? 1 : 0.5,
//   ease: "easeInOut",
//   delay: loading ? 2.2 : delay ? 0.4 : 0,
// }}
