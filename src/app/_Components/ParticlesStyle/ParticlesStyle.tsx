"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Ioptions } from "@/app/Interfaces/IParticles";
import { useThemeColorProvider } from "@/app/Context/ColorContext/ColorsContext";

const ParticlesStyle = () => {
  const [init, setInit] = useState(false);
  const { ringColor } = useThemeColorProvider();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: Ioptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          density: {
            enable: true,
            area: 500,
          },
          value: 130,
        },
        opacity: {
          value: 0.1,
        },
        color: {
          value: ringColor,
        } /*"#00779a"*/,
        links: {
          color: ringColor,
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [ringColor],
  );

  if (init) {
    return (
      <Particles
        className="fixed inset-0 -z-10 [transform:translate3d(0,0,0)]"
        id="tsparticles"
        options={options as unknown as ISourceOptions}
      />
    );
  }

  return <></>;
};

export default ParticlesStyle;
