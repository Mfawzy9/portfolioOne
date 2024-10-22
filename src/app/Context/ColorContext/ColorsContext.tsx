"use client";

import { ThemeColors, IThemeColorStateParams } from "@/app/Interfaces/IColors";
import { createContext, useContext, useEffect, useState } from "react";
import { colors } from "./colors";
import { useTheme } from "next-themes";
import chroma from "chroma-js";

export const ColorsContext = createContext<IThemeColorStateParams>(
  {} as IThemeColorStateParams,
);

const ColorsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [customCursor, setCustomCursor] = useState<
    "default" | "circle" | "trail"
  >(getCurrentCursor());
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSmallScreen(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
        document.documentElement.classList.remove("cursor-none");
      } else {
        setSmallScreen(false);
        if (customCursor === "circle") {
          document.documentElement.classList.add("cursor-none");
        } else {
          document.documentElement.classList.remove("cursor-none");
        }
      }
    });
  }, [customCursor]);
  const [isMounted, setIsMounted] = useState(false);
  const [ringColor, setRingColor] = useState("");

  function getCurrentCursor(): "circle" | "trail" | "default" {
    const cursor = localStorage.getItem("customCursor");
    try {
      if (cursor === "circle" || cursor === null) {
        return "circle";
      }
      return cursor as "circle" | "trail" | "default";
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return "circle";
    }
  }

  function setGlobalColorTheme(
    themeMode: "light" | "dark",
    color: ThemeColors,
  ) {
    const theme = colors[color][themeMode] as {
      [key: string]: string;
    };

    for (const key in theme) {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
    const hexColor = chroma(`hsl(${theme.ring})`).hex();
    setRingColor(hexColor);
  }

  const getCurrentColor = () => {
    try {
      return localStorage.getItem("themeColor") || ("Blue" as ThemeColors);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return "Blue" as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = useState(
    getCurrentColor() as ThemeColors,
  );

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("customCursor", customCursor);
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(
      resolvedTheme as "light" | "dark",
      themeColor as ThemeColors,
    );

    setIsMounted(true);
  }, [resolvedTheme, themeColor, customCursor]);

  if (!isMounted) {
    return null;
  }

  return (
    <ColorsContext.Provider
      value={{
        themeColor,
        setThemeColor,
        ringColor,
        setRingColor,
        customCursor,
        setCustomCursor,
        smallScreen,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
};

export default ColorsContextProvider;

export const useThemeColorProvider = () => {
  return useContext(ColorsContext);
};
