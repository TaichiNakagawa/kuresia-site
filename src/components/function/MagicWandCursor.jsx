// src/components/function/MagicWandCursor.jsx
import { useState, useEffect, useRef } from "react";

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function MagicWandCursor({ enabled = true }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // タッチ端末判定
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // マウス追従
  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [enabled]);

  // タップで粒子発生
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleClick = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      const newParticles = Array.from({ length: 12 }).map(() => ({
        x,
        y,
        angle: randomRange(0, Math.PI * 2),
        speed: randomRange(2, 6),
        size: randomRange(2, 5),
        color: ["#00FFFF", "#66CCFF", "#99FFFF", "#FFFFFF"][Math.floor(Math.random() * 4)],
        createdAt: Date.now(),
        lifetime: 400,
      }));

      particlesRef.current.push(...newParticles);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleClick);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      particlesRef.current = particlesRef.current.filter(p => now - p.createdAt < p.lifetime);

      particlesRef.current.forEach(p => {
        const t = (now - p.createdAt) / p.lifetime;
        const px = p.x + Math.cos(p.angle) * p.speed * t * 10;
        const py = p.y + Math.sin(p.angle) * p.speed * t * 10;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [enabled]);

  return (
    <>
      {!isTouchDevice && enabled && <style>{`* { cursor: none !important; }`}</style>}
      {!isTouchDevice && enabled && (
        <img
          src="/wand.png"
          alt="Magic Wand"
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y + 40, // 杖先端に合わせる
            pointerEvents: "none",
            transform: "translate(-50%, -50%) rotate(-45deg)",
            width: "80px",
            zIndex: 9999,
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: -20,
          left: 10,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10000
        }}
      />
    </>
  );
}
