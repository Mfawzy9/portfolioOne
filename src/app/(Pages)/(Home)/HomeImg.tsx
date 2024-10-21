"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainImg from "../../../../public/assets/imgs/hero1.png";
import secImg from "../../../../public/assets/imgs/hero2.png";
import black from "../../../../public/assets/imgs/Black.png";

const HomeImg = () => {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const [src, setSrc] = useState(mainImg);

  useEffect(() => {
    setSrc(dark ? mainImg : secImg);
  }, [dark]);

  return (
    <>
      <div className="relative overflow-hidden w-fit h-fit">
        <AnimatePresence mode="wait">
          <motion.div
            key={src.src}
            initial={{
              opacity: 0,
              transform: src === mainImg ? "scale(0.75)" : "scale(1.3)",
            }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{
              opacity: 0,
              transform: secImg === src ? "scale(0.75)" : "scale(1.3)",
            }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto"
          >
            <Image
              priority
              src={mainImg}
              className={`rounded-full border border-ring lg:border-0 lg:rounded-none lg:w-full lg:h-full
                transition-transform duration-500 ease-in-out`}
              alt="profile photo"
              width={666}
              height={666}
            />
          </motion.div>
        </AnimatePresence>
        <Image
          priority
          src={black}
          className={`absolute ${dark ? "opacity-0" : "opacity-100"} left-0 top-0 w-full h-auto
            rounded-full border border-ring lg:border-0 hover:opacity-0 lg:rounded-none
            lg:w-full lg:h-full [transition:all_1s_ease-in-out] `}
          alt="profile photo"
          width={666}
          height={666}
        />
      </div>
    </>
  );
};

export default HomeImg;
