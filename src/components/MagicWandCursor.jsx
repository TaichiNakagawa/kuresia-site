import { useState, useEffect } from "react";

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function MagicWandCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState([]);

  // マウス追従
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // クリックで派手な粒を追加
    const handleClick = () => {
      const id = Date.now();

      // 粒を複数生成
      const newSparks = Array.from({ length: 10 }).map((_, i) => ({
        id: id + "-" + i,
        x: pos.x + 30, // 杖の先端調整
        y: pos.y - 10,
        angle: randomRange(-90, 90), // 飛ぶ方向(度)
        speed: randomRange(2, 6),
        size: randomRange(6, 12),
        color: ["#FFD700", "#FFFFFF", "#FF69B4"][Math.floor(Math.random() * 3)],
      }));

      setSparks((prev) => [...prev, ...newSparks]);

      // 1.2秒後に消す
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => !newSparks.some(ns => ns.id === spark.id)));
      }, 1200);
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [pos]);

  return (
    <>
      {/* 全要素でカーソル非表示 */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* 魔法の杖 */}
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
            // カスタムプロパティで角度・距離をCSSに渡す方法は複雑なので
            // ここはJSで動かす方法にしたいところだが、
            // 簡易的にCSSアニメだけで動かします。
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
            transform: translate(calc(var(--dx, 50px)), calc(var(--dy, -50px))) scale(0.3);
          }
        }
      `}</style>
    </>
  );
}
