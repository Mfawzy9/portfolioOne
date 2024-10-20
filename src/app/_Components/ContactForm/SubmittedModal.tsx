import { motion } from "framer-motion";
import React, { SetStateAction, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Lottie from "lottie-react";
import submittedIcon from "../../../../public/formSubmitted.json";

const SubmittedModal = ({
  setSubmitted,
}: {
  setSubmitted: React.Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (e.target && (e.target as HTMLElement).classList.contains("fixed")) {
        setSubmitted(false);
      }
    };
    document.documentElement.addEventListener("click", closeModal);

    return () =>
      document.documentElement.removeEventListener("click", closeModal);
  }, [setSubmitted]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-30 flex items-center justify-center"
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
        className="max-w-md lg:mx-auto bg-card rounded flex flex-col items-center gap-3
          overflow-hidden shadow-[0_0_7px_0px] shadow-ring relative overflow-y-auto
          max-h-screen mx-1 sm:mx-2"
      >
        <Lottie
          animationData={submittedIcon}
          loop={false}
          className="w-[200px] h-[200px]"
        />
        <div
          className="px-5 sm:px-20 pb-5 pt-0 sm:bottom-6 left-0 w-full flex flex-col items-center
            z-10"
        >
          <h1 className="text-4xl font-bold text-center">Thank you!</h1>
          <p className="text-center sm:text-lg">
            I have received your submission
          </p>
          <button
            onMouseUp={() => setSubmitted(false)}
            className="mt-3 font-bold font-sans bg-secondary-foreground text-background px-3.5 py-2
              hover:bg-secondary-foreground/80 active:scale-95 rounded"
          >
            Return
          </button>
        </div>
        <FaTimes
          className="absolute top-3 right-3 text-2xl cursor-pointer"
          onClick={() => setSubmitted(false)}
        />
      </motion.div>
    </motion.div>
  );
};

export default SubmittedModal;
