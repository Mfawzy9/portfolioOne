"use client";
import { ILoaderContext } from "@/app/Interfaces/ILoaderContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext, createContext } from "react";

export const LoaderContext = createContext<ILoaderContext>(
  {} as ILoaderContext,
);

const LoaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState<string | null>("/");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const handleNavigate = (newPath: string) => {
    document.body.classList.add("overflow-hidden");
    setPath(newPath);

    setTimeout(() => {
      router.push(newPath);
    }, 200);

    setTimeout(
      () => {
        document.body.classList.remove("overflow-hidden");
      },
      loading ? 3200 : 1500,
    );
  };

  return (
    <LoaderContext.Provider
      value={{ loading, setLoading, path, setPath, handleNavigate }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;

export const useLoaderProvider = () => {
  return useContext(LoaderContext);
};
