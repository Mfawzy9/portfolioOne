"use client";
import skillsArray from "@/app/(Pages)/skills/skillsArray";
import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export const SkillsCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  const { loading } = useLoaderProvider();

  return (
    <div
      className={cn(
        `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
        2xl:grid-cols-8 gap-6 py-10 lg:pe-10`,
      )}
    >
      {skillsArray?.map((skill, idx) => (
        <motion.div
          key={skill?.link}
          variants={{
            hidden: {
              opacity: 0,
              y: idx % 2 === 0 ? "-100%" : "100%",
              x: idx % 2 === 0 ? "50%" : "-50%",
            },
            visible: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration: 0.05,
                delay: loading ? 2.5 + idx * 0.2 : 0.6 + idx * 0.15,
              },
            },
          }}
          initial={"hidden"}
          animate={"visible"}
        >
          <Link
            target="_blank"
            href={skill?.link}
            className="relative overflow-hidden group block h-full w-full shadow-md shadow-ring sm:px-3
              py-1 bg-primary-foreground rounded-xl"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-secondary-foreground dark:bg-white block z-10
                    rounded-xl"
                  layoutId="hoverBackground"
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

            <div className="flex flex-col items-center justify-center w-full h-full px-4">
              {dark && skill.lightIcon !== undefined ? (
                <skill.lightIcon className="w-full h-full relative z-20" />
              ) : (
                <skill.icon className="w-full h-full relative z-20" />
              )}
              <h4
                className={
                  "font-bold tracking-wide mt-3 relative z-20 text-ring text-center"
                }
              >
                {skill?.skill}
              </h4>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
