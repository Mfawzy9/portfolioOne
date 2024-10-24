"use client";
import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [hide, setHide] = useState(false);
  const { loading } = useLoaderProvider();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const sliderControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sliderControls.start("visible");
      setHide(false);
      setTimeout(
        () => {
          setHide(true);
        },
        loading ? 3200 : 1300,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, mainControls, sliderControls]);

  return (
    <>
      <div
        ref={ref}
        className={`${hide ? "" : "overflow-hidden"} relative ${className ?? ""}`}
      >
        <motion.main
          variants={{
            hidden: {
              opacity: 0,
              y: "75px",
            },
            visible: {
              opacity: 1,
              y: "0",
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.5,
            delay: loading ? 2.2 : 0.7,
          }}
        >
          {children}
        </motion.main>

        <motion.div
          variants={{
            hidden: {
              bottom: 0,
            },
            visible: {
              bottom: "100%",
            },
          }}
          initial="hidden"
          animate={sliderControls}
          transition={{
            duration: 0.5,
            delay: loading ? 2.1 : 0.5,
            ease: "easeIn",
          }}
          className={`absolute ${hide ? "hidden" : ""} bottom-0 w-full h-full left-0 z-10 bg-gray-500
            dark:bg-muted`}
        ></motion.div>
      </div>
    </>
  );
};

export default Content;
