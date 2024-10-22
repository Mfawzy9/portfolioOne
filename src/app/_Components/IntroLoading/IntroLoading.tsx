"use client";
import { motion, Variants } from "framer-motion";
import Lottie from "lottie-react";
import loaderIcon from "../../../../public/hello.json";
import CursorEffect from "../CursorEffects/CircleCursor";

const introIconVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const loaderContainerVariants: Variants = {
  initial: { y: "0%" },
  animate: { y: "0%" },
  exit: {
    y: "-200vh",
    transition: {
      duration: 1.2,
      ease: "easeIn",
      delay: 0.3,
    },
  },
};

const IntroLoading: React.FC = () => {
  return (
    <>
      <CursorEffect />
      <motion.div
        variants={loaderContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b
          from-black to-gray-900 text-9xl"
      >
        <svg
          fill=""
          className="ut-shape fill-gray-900 absolute top-full"
          width="100%"
          height="100vh"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transformOrigin: "50% 0%" }}
        >
          <path d="M -30.45,-57.86 -30.45,442.6 53.8,443.8 53.8,396.3 179.5,396.3 179.5,654.7 193.3,654.7 193.3,589.1 253.1,589.1 253.1,561.6 276.1,561.6 276.1,531.2 320.6,531.2 320.6,238.6 406.5,238.6 406.5,213.9 435.6,213.9 435.6,246.2 477,246.2 477,289.9 527.6,289.9 527.6,263.3 553.7,263.3 553.7,280.4 592,280.4 592,189.2 742.3,189.2 742.3,259.5 762.2,259.5 762.2,103.7 776,103.7 776,77.11 791.3,77.11 791.3,18.21 852.7,18.21 852.7,86.61 871.1,86.61 871.1,231 878.7,240.5 878.7,320.3 891,320.3 891,434.3 923.2,434.3 923.2,145.5 940.1,145.5 940.1,117 976.9,117 976.9,139.8 1031,139.8 1031,284.2 1041,284.2 1041,242.4 1176,242.4 1176,282.3 1192,282.3 1192,641.4 1210,641.4 1210,692.7 1225,692.7 1225,599.6 1236,599.6 1236,527.4 1248,527.4 1248,500.8 1273,500.8 1273,523.6 1291,523.6 1291,652.8 1316,652.8 1316,533.1 1337,533.1 1337,502.7 1356,502.7 1356,523.6 1414,523.6 1414,491.3 1432,491.3 1432,523.6 1486,523.6 1486,-57.86 Z"></path>
        </svg>
        <motion.div
          variants={introIconVariants}
          initial="initial"
          animate={"animate"}
          exit="exit"
        >
          <Lottie animationData={loaderIcon} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroLoading;
