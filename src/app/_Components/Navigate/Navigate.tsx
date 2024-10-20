"use client";

import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";

const Navigate = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  const { handleNavigate } = useLoaderProvider();

  return <button onClick={() => handleNavigate(link)}>{children}</button>;
};

export default Navigate;
