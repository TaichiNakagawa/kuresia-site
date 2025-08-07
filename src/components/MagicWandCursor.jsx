import { useState, useEffect } from "react";

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function MagicWandCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // 初回：タッチデバイスか確認
  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  // マウス or タッチに追従
  useEffect(() => {
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
  }, []);

  // クリック or タッチで魔法の粒発生
  useEffect(() => {
    const handleClickOrTouch = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      const id = Date.now();

      const newSparks = Array.from({ length: 10 }).map((_, i) => ({
        id: id + "-" + i,
        x: x + 30,
        y: y - 10,
        angle: randomRange(-90, 90),
        speed: randomRange(2, 6),
        size: randomRange(6, 12),
        color: ["#FFD700", "#FFFFFF", "#FF69B4"][Math.floor(Math.random() * 3)],
      }));

      setSparks((prev) => [...prev, ...newSparks]);

      setTimeout(() => {
        setSparks((prev) =>
          prev.filter((spark) => !newSparks.some((ns) => ns.id === spark.id))
        );
      }, 1200);
    };

    window.addEventListener("click", handleClickOrTouch);
    window.addEventListener("touchstart", handleClickOrTouch);

    return () => {
      window.removeEventListener("click", handleClickOrTouch);
      window.removeEventListener("touchstart", handleClickOrTouch);
    };
  }, []);

  return (
    <>
      {/* PC時のみカーソルを隠す */}
      {!isTouchDevice && <style>{`* { cursor: none !important; }`}</style>}

      {/* 杖：タッチデバイスでは非表示 */}
      {!isTouchDevice && (
        <img
          src="/wand.png"
          alt="Magic Wand"
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            pointerEvents: "none",
            transform: "translate(-50%, -50%) rotate(-45deg)",
            width: "80px",
            zIndex: 9999,
          }}
        />
      )}

      {/* キラキラ粒 */}
      {sparks.map(({ id, x, y, angle, speed, size, color }) => (
        <div
          key={id}
          style={{
            position: "fixed",
            left: x,
            top: y,
            width: size,
            height: size,
            background: color,
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 10000,
            transform: `translate(0, 0)`,
            animation: `sparkFly 1.2s forwards`,
            animationTimingFunction: "ease-out",
          }}
        />
      ))}

      <style>{`
        @keyframes sparkFly {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(50px, -50px) scale(0.3);
          }
        }
      `}</style>
    </>
  );
}
