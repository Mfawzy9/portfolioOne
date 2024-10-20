"use client";

import ParticlesStyle from "./_Components/ParticlesStyle/ParticlesStyle";
import IntroLoading from "./_Components/IntroLoading/IntroLoading";
import { AnimatePresence } from "framer-motion";
import ColorToggler from "./_Components/ColorToggler/ColorToggler";
import TransitionProvider from "./_Components/TransitionProvider/TransitionProvider";
import { useLoaderProvider } from "./Context/LoaderContext/LoaderContext";
import ModeToggler from "./_Components/ModeToggler/ModeToggler";
import RightBar from "./_Components/RightBar/RightBar";

const App = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useLoaderProvider();

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <IntroLoading />}
      </AnimatePresence>

      <>
        <RightBar />
        <ParticlesStyle />
        <ModeToggler />
        <ColorToggler />
        <TransitionProvider>{children}</TransitionProvider>
      </>
    </>
  );
};

export default App;
