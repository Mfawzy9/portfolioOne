"use client";
import { useThemeColorProvider } from "@/app/Context/ColorContext/ColorsContext";
import { ThemeColors } from "@/app/Interfaces/IColors";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import { BiSolidColor } from "react-icons/bi";
import { FaMousePointer, FaTimes } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

const availableThemeColors = [
  { name: "Zinc", light: "text-zinc-900", dark: "text-zinc-700" },
  { name: "Rose", light: "text-rose-600", dark: "text-rose-700" },
  { name: "Blue", light: "text-blue-600", dark: "text-blue-700" },
  { name: "Green", light: "text-green-600", dark: "text-green-500" },
  { name: "Orange", light: "text-orange-500", dark: "text-orange-700" },
  { name: "Violet", light: "text-violet-500", dark: "text-violet-700" },
  { name: "Red", light: "text-red-600", dark: "text-red-700" },
  { name: "Yellow", light: "text-yellow-600", dark: "text-yellow-500" },
];

const ColorToggler = () => {
  const [switcher, setSwitcher] = useState(false);

  const {
    themeColor,
    setThemeColor,
    setCustomCursor,
    customCursor,
    smallScreen,
  } = useThemeColorProvider();
  const { theme } = useTheme();

  const boxRef = useRef<HTMLDivElement>(null);

  const setThemeColorOnlyIfNotTheSame = useMemo(() => {
    return (color: ThemeColors) => {
      if (themeColor !== color) {
        setThemeColor(color);
      }
    };
  }, [themeColor, setThemeColor]);

  useEffect(() => {
    const closeToggler = (e: MouseEvent) => {
      if (
        boxRef.current &&
        !boxRef.current.contains(e.target as Node) &&
        switcher
      ) {
        setSwitcher(false);
      }
    };
    document.addEventListener("click", closeToggler);
    return () => {
      document.removeEventListener("click", closeToggler);
    };
  }, [switcher]);

  return (
    <div>
      <button
        onClick={() => setSwitcher(true)}
        className={`${switcher ? "-left-1/3" : "left-0"} transition-all z-30 duration-700 fixed
          bottom-1/2`}
      >
        <BiSolidColor
          className="w-8 sm:w-10 h-8 sm:h-10 animate-rotate360 bg-gradient-to-r text-gray-300
            from-teal-700 to-amber-800 rounded-full"
        />
      </button>

      <div
        ref={boxRef}
        className={`w-[250px] text-center top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm
          pt-10 pb-5 dark:bg-gray-800/60 shadow-md shadow-primary flex flex-col gap-4
          justify-center items-center ${switcher ? "left-0" : "-left-[150%] sm:-left-1/2"}
          fixed transition-all z-30 rounded duration-700 ease-in-out`}
      >
        <FaTimes
          role="button"
          onClick={() => setSwitcher(false)}
          className="w-7 h-7 absolute top-3 right-3"
        />
        <h1 className="text-2xl text-black dark:text-white font-semibold">
          Color Switcher
        </h1>
        <ul className="flex flex-wrap gap-3 px-4 justify-center">
          {availableThemeColors.map(({ name, light, dark }) => (
            <li key={name}>
              <IoColorPaletteSharp
                role="button"
                className={
                  cn("w-9 h-9", theme === "dark" ? dark : light) +
                  `${themeColor === name ? " border-2 border-ring rounded-full" : ""}`
                }
                onClick={() =>
                  setThemeColorOnlyIfNotTheSame(name as ThemeColors)
                }
              />
            </li>
          ))}
        </ul>
        {/* cursors */}
        {!smallScreen && (
          <div className="flex flex-col gap-2 items-center border-t-2 pt-3 border-muted-foreground">
            <h1 className="text-2xl text-black dark:text-white font-semibold">
              Select Cursor
            </h1>
            <div className="flex items-center justify-center gap-6">
              <button
                title="Default"
                disabled={customCursor === "default"}
                onClick={() => setCustomCursor("default")}
                className={`disabled:cursor-not-allowed text-2xl
                ${customCursor === "default" ? "opacity-100" : "opacity-50 dark:opacity-30"}`}
              >
                <FaMousePointer />
              </button>
              <button
                title="Circle"
                disabled={customCursor === "circle"}
                onClick={() => setCustomCursor("circle")}
                className={`disabled:cursor-not-allowed relative h-9 w-9 rounded-full border-ring border-2
                ${customCursor === "circle" ? "opacity-100" : "opacity-50 dark:opacity-30"}`}
              >
                <span
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-ring rounded-full
                    h-2 w-2"
                />
              </button>

              <button
                title="Trail"
                disabled={customCursor === "trail"}
                onClick={() => setCustomCursor("trail")}
                className={`disabled:cursor-not-allowed text-2xl relative
                ${customCursor === "trail" ? "opacity-100" : "opacity-50 dark:opacity-30"}`}
              >
                {["right-0", "-right-2", "-right-4"].map((item, index) => (
                  <span
                    key={index}
                    className={`absolute top-0 ${item} w-2 h-2 bg-ring rounded-full inline-block`}
                  ></span>
                ))}
                {/* <span className="absolute top-0 right-0 w-2 h-2 bg-ring rounded-full inline-block"></span>
                <span className="absolute top-0 -right-1 w-2 h-2 bg-ring rounded-full inline-block"></span>
                <span className="absolute top-0 -right-2 w-2 h-2 bg-ring rounded-full inline-block"></span> */}
                <FaMousePointer />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorToggler;
