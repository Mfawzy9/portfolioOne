"use client";

import { useThemeColorProvider } from "@/app/Context/ColorContext/ColorsContext";
import CircleCursor from "./CircleCursor";
import TrailCursor from "./TrailCursor";
import { useEffect } from "react";

const CursorsContainer = () => {
  const { customCursor, smallScreen } = useThemeColorProvider();

  useEffect(() => {
    if (customCursor === "circle") {
      document.documentElement.classList.add("cursor-none");
    } else {
      document.documentElement.classList.remove("cursor-none");
    }
  }, [customCursor]);
  return (
    <>
      {customCursor === "circle" && !smallScreen && <CircleCursor />}
      {customCursor === "trail" && !smallScreen && <TrailCursor />}
      {customCursor === "default" && null}
    </>
  );
};

export default CursorsContainer;
