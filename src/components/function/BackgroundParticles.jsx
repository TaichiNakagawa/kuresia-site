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
          number: { value: 40 },
          color: {
            value: ["#a0522d", "#8b4513", "#3e2723", "#d2b48c"]
          },
          shape: {
            type: "circle",
          },
          opacity: { value: 0.3 },
          size: { value: { min: 2, max: 6 } },
          move: {
            enable: true,
            speed: 0.8,
            direction: "top",
            random: true,
            straight: false,
            outModes: {
              default: "out",
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