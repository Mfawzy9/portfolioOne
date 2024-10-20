"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { path, setPath } = useLoaderProvider();

  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      setPath(pathName);
      setIsMounted(true);
    }
  }, [pathName, setPath]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {path !== null && (
        <>
          <AnimatePresence mode="wait">
            <div
              key={path}
              className="relative w-screen min-h-screen overflow-hidden"
            >
              <motion.div
                className="h-screen w-screen fixed bg-popover-foreground dark:bg-gray-300 rounded-b-[150px]
                  z-40"
                animate={{ height: "0vh" }}
                exit={{ height: "140vh" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.div
                className="fixed text-wrap text-center m-auto top-0 bottom-0 left-0 right-0 text-ring
                  text-5xl sm:text-8xl font-bold cursor- pointer-events-none z-40 w-fit h-fit"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {path == "/" ? "HOME" : path?.substring(1).toUpperCase()}
              </motion.div>
              <motion.div
                className="h-screen w-screen fixed bg-popover-foreground dark:bg-gray-300 rounded-t-[150px]
                  bottom-0 z-30"
                initial={{ height: "140vh" }}
                animate={{
                  height: "0vh",
                  transition: { delay: 0.5, ease: "easeOut" },
                }}
              />
              {children}
            </div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}
