import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    console.log("🌟 particlesInit called");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("🌟 particlesLoaded called");
    if (container) {
      console.log("particles count:", container.particles.count);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        zIndex: -1,
      }}
      options={{
        fullScreen: { enable: false }, // ここ重要: 独自でサイズ制御しているため fullScreen は false に
        background: {
          color: "#000000",
        },
        detectRetina: true,
        particles: {
          number: {
            value: 100,
            density: { enable: false },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 1 },
          size: { value: 5 },
          move: { enable: true, speed: 2 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
          },
        },
      }}
    />
  );
}