import { IProject } from "@/app/(Pages)/projects/projectsArr";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, memo, useEffect, useState } from "react";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import ImgModal from "./ImgModal";

const ProjectModal = ({
  modal,
  setModal,
  project,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  project: IProject;
}) => {
  const [imgModal, setImgModal] = useState({
    img: "",
    idx: 0,
  });
  const closeModal = (e: MouseEvent) => {
    if (
      e.target &&
      (e.target as HTMLElement).classList.contains("project-modal") &&
      !imgModal.img &&
      modal
    ) {
      setModal(false);
      document.body.classList.remove("overflow-y-hidden");
    }
  };
  useEffect(() => {
    document.documentElement.addEventListener("click", closeModal);

    return () =>
      document.documentElement.removeEventListener("click", closeModal);
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-30 flex items-center justify-center min-h-screen
              project-modal overscroll-y-auto w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{
                opacity: 0,
                transform: "scale(0) ",
              }}
              animate={{
                opacity: 1,
                transform: "scale(1) ",
              }}
              exit={{
                opacity: 0,
                transform: "scale(0) ",
                transition: {
                  duration: 0.2,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              className="max-w-4xl max-h-[80vh] md:max-h-[90vh] lg:mx-auto bg-card rounded flex flex-col
                gap-5 overflow-x-hidden sm:mb-0 shadow-[0_0_7px_0px] shadow-ring relative
                overflow-y-auto mx-1 pt-3 sm:pt-10 sm:mx-2"
            >
              {imgModal.img !== "" && (
                <ImgModal
                  img={imgModal.img}
                  idx={imgModal.idx}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              )}

              <FaTimes
                className="absolute top-3 sm:top-3 right-3 text-2xl cursor-pointer"
                onClick={() => {
                  setModal(false);
                  document.body.classList.remove("overflow-y-hidden");
                }}
              />
              <h3 className="text-center text-2xl font-bold capitalize">
                {project.title}
              </h3>
              <div className="flex justify-center items-center">
                {project.imgs.map((img, idx) => {
                  const randomRotate = Math.floor(Math.random() * 20) - 5;

                  return (
                    <div
                      role="button"
                      className={`rounded-xl -mr-4 p-1 bg-black border-black border flex-shrink-0 hover:!scale-125
                      hover:z-10 transition-all duration-300 relative overflow-hidden`}
                      style={{
                        transform: `rotate(${randomRotate}deg)`,
                      }}
                      key={idx}
                      onClick={() => setImgModal({ img: img, idx: idx })}
                    >
                      <Image
                        alt={"projectImage" + idx}
                        src={img}
                        width={140}
                        height={140}
                        quality={100}
                        className="rounded-lg h-20 w-20 md:h-32 md:w-32 object-cover flex-shrink-0"
                      />
                    </div>
                  );
                })}
              </div>

              {/* description */}
              <div className="px-4">
                <h3
                  className="text-xl text-muted-foreground font-bold border-b-4 border-l-4 border-ring w-fit
                    ps-1 mb-2"
                >
                  description:
                </h3>
                <p className="text-sm leading-relaxed overflow-y-auto max-h-40 sm:max-h-full">
                  {project.description}
                </p>
              </div>

              {/* technologies */}
              <div className="px-4">
                <h3
                  className="text-xl text-muted-foreground font-bold border-b-4 border-l-4 border-ring w-fit
                    ps-1 mb-2"
                >
                  technologies used:
                </h3>

                <p className="text-sm inline-block leading-relaxed max-h-40 sm:max-h-full overflow-y-auto">
                  {project.technologies.map((tech, idx) => {
                    return (
                      <Fragment key={idx}>
                        <a
                          href={tech.link}
                          target="_blank"
                          className="font-bold text-card-foreground hover:underline"
                        >
                          {tech.name}:{" "}
                        </a>
                        {tech.description} ,{" "}
                      </Fragment>
                    );
                  })}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-3 justify-center sm:justify-between items-center sm:gap-0
                  bg-gray-700 dark:bg-border sm:pb-3 py-5 sm:py-3 p-1 sm:p-3"
              >
                <div className="techIcons flex gap-1 flex-wrap">
                  {project.technologiesIcons.map((Icon, idx) => {
                    return (
                      <span
                        key={"icon" + idx}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border
                          border-muted-foreground/40 bg-black/80"
                      >
                        <Icon className="w-full h-full" />
                      </span>
                    );
                  })}
                </div>
                {/* buttons */}
                <div className="btns flex gap-5">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="group hover:shadow-lg hover:shadow-ring/60 transition ease-in-out
                      hover:scale-105 p-[3px] bg-gradient-to-br from-ring/45 via-ring/45 to-ring/45
                      hover:from-ring rotate-6 hover:via-ring hover:to-ring rounded"
                  >
                    <div
                      className="px-2 py-1 bg-black/80 rounded font-bold flex items-center justify-center
                        text-ring"
                    >
                      <FaLink className="me-2" />
                      Demo
                    </div>
                  </Link>

                  <Link
                    href={project.repo}
                    target="_blank"
                    className="group hover:shadow-lg hover:shadow-ring/60 transition ease-in-out
                      hover:scale-105 p-[3px] bg-gradient-to-br from-ring/45 via-ring/45 to-ring/45
                      hover:from-ring -rotate-6 hover:via-ring hover:to-ring rounded"
                  >
                    <div
                      className="px-2 py-1 bg-black/80 rounded font-bold flex items-center justify-center
                        text-ring"
                    >
                      <FaGithub className="me-2" />
                      Code
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(ProjectModal);
