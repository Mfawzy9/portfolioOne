"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import ModeProvider from "../../Context/ModeContext/ModeProvider";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const ModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={26}
        height={26}
        sizes="26x26"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        className="animate-spin"
      />
    );
  }

  return (
    <>
      <button
        className="fixed top-5 right-5 z-30"
        onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
      >
        {resolvedTheme == "dark" ? (
          <MoonIcon className="w-7 h-7" />
        ) : (
          <SunIcon className="w-7 h-7" />
        )}
      </button>
    </>
  );
};

function ModeToggler() {
  return (
    <ModeProvider attribute="class" defaultTheme="system" enableSystem>
      <ModeBtn />
    </ModeProvider>
  );
}

export default ModeToggler;
