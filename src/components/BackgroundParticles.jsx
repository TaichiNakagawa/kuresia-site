import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 20 },
          shape: {
            type: "image",
            image: {
              src: "/leaf.png",
              width: 32,
              height: 32,
            },
          },
          opacity: { value: 0.8 },
          size: { value: { min: 15, max: 30 } },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            straight: false,
            outModes: {
              default: "out",
            },
          },
          rotate: {
            random: true,
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
        },
        background: {
          color: "transparent", // 背景は透明
        },
      }}
    />
  );
}