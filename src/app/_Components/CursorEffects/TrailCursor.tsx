"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef, memo } from "react";

const TrailCursor: React.FC = () => {
  const [cursor, setCursor] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const numberOfDots = 20;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const draw = () => {
      let x = cursor.x;
      let y = cursor.y;

      dotsRef.current.forEach((dot, index) => {
        const nextDot = dotsRef.current[index + 1] || dotsRef.current[0];
        if (dot) {
          dot.style.left = x + "px";
          dot.style.top = y + "px";
        }

        x += (nextDot?.offsetLeft - dot?.offsetLeft) * 0.5;
        y += (nextDot?.offsetTop - dot?.offsetTop) * 0.5;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursor]);

  return (
    <>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <motion.div
          key={index}
          animate={{ position: "fixed" }}
          className="dot w-2 h-2 rounded-full bg-ring ring-1 ring-foreground/40 pointer-events-none
            z-50"
          ref={(el) => {
            if (el) {
              dotsRef.current[index] = el;
            }
          }}
        />
      ))}
    </>
  );
};

export default memo(TrailCursor);
