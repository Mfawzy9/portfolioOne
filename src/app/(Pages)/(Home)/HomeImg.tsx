"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainImg from "../../../../public/assets/imgs/hero1.png";
import secImg from "../../../../public/assets/imgs/hero2.png";
import Content from "@/app/_Components/Content/Content";

const HomeImg = () => {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const [src, setSrc] = useState(mainImg);

  useEffect(() => {
    setSrc(dark ? mainImg : secImg);
  }, [dark]);

  return (
    <>
      <Content
        className={`${dark ? "scale-75" : "scale-75 xl:scale-[0.6]"} transition-transform
          duration-500 ease-in-out rounded-full lg:rounded-none`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={src.src}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto"
          >
            <Image
              priority
              src={src}
              className={
                "rounded-full border border-ring lg:border-0 lg:rounded-none lg:w-full lg:h-full "
              }
              alt="profile photo"
              width={666}
              height={666}
            />
          </motion.div>
        </AnimatePresence>
      </Content>
    </>
  );
};

export default HomeImg;
