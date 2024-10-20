"use client";
import { useThemeColorProvider } from "@/app/Context/ColorContext/ColorsContext";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const CursorEffect = () => {
  const { customCursor, smallScreen } = useThemeColorProvider();
  const [cursorPosition, setCursorPosition] = useState<{
    x: string | number;
    y: number | string;
  }>({ x: "-500", y: 0 });
  const [innerVariant, setInnerVariant] = useState<"default" | "hovered">(
    "default",
  );

  const outerVariants: Variants = {
    default: {
      position: "fixed",
      x: `${+cursorPosition.x - 18}px`,
      y: `${+cursorPosition.y - 18}px`,
      transition: { type: "smooth", duration: 0 },
    },
  };

  const innerVariants: Variants = {
    default: {
      width: 8,
      height: 8,
      opacity: 1,
    },
    hovered: {
      width: 60,
      height: 60,
      opacity: 0.4,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setInnerVariant("hovered");
    };
    const handleMouseLeave = () => {
      setInnerVariant("default");
    };

    const elements = document.querySelectorAll(
      'a, button, [role="button"], [onClick]',
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [innerVariant, smallScreen]);

  return (
    <>
      {customCursor && !smallScreen && (
        <motion.div
          id="outerCursor"
          className={`top-0 left-0 w-9 h-9 rounded-full
          ${innerVariant === "hovered" ? "border-transparent" : "border-ring"} border-2
          z-[500] pointer-events-none `}
          variants={outerVariants}
          animate={"default"}
        >
          <motion.div
            variants={innerVariants}
            animate={innerVariant}
            id="innerCursor"
            className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
            pointer-events-none bg-ring`}
          />
        </motion.div>
      )}
    </>
  );
};

export default CursorEffect;
