"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainImg from "../../../../public/assets/imgs/hero1.png";
import secImg from "../../../../public/assets/imgs/hero2.png";

const HomeImg = () => {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const [src, setSrc] = useState(mainImg);

  useEffect(() => {
    setSrc(dark ? mainImg : secImg);
  }, [dark]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={src.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto"
      >
        <Image
          priority
          src={src}
          className={`rounded-full border border-ring scale-75 lg:border-0 lg:rounded-none lg:w-full
            lg:h-full transition-transform duration-500 ease-in-out`}
          alt="profile photo"
          width={666}
          height={666}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default HomeImg;
