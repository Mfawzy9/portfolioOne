"use client";
import { useThemeColorProvider } from "@/app/Context/ColorContext/ColorsContext";
import CircleCursor from "./CircleCursor";
import TrailCursor from "./TrailCursor";

const CursorsContainer = () => {
  const { customCursor, smallScreen } = useThemeColorProvider();
  return (
    <>
      {customCursor === "circle" && !smallScreen && <CircleCursor />}
      {customCursor === "trail" && !smallScreen && <TrailCursor />}
      {customCursor === "default" && null}
    </>
  );
};
export default CursorsContainer;
