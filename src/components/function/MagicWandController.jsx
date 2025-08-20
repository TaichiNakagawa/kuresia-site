// src/components/function/MagicWandController.jsx
import { useState, useEffect } from "react";
import MagicWandCursor from "./MagicWandCursor";

export default function MagicWandController() {
  const [wandEnabled, setWandEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 初期値を localStorage から復元（PC のみ）
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setWandEnabled(true); // スマホは常にON
      } else {
        const saved = localStorage.getItem("wandEnabled");
        if (saved !== null) setWandEnabled(saved === "true");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // PC のみ localStorage に保存
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("wandEnabled", String(wandEnabled));
    }
  }, [wandEnabled, isMobile]);

  return (
    <>
      {/* PC のみ切り替えボタン表示 */}
      {!isMobile && (
        <button
          onClick={() => setWandEnabled((v) => !v)}
          aria-pressed={wandEnabled}
          className={`
            fixed top-4 right-4 z-[10001] 
            rounded-full px-5 py-3 
            bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
            text-white font-bold
            shadow-xl
            hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
            transition-transform duration-300
            before:absolute before:inset-0 before:rounded-full before:animate-pulse before:bg-white before:opacity-20
          `}
          title="杖カーソルのON/OFF"
        >
          {wandEnabled ? "杖ON" : "杖OFF"}
        </button>
      )}

      {/* 魔法カーソル */}
      <MagicWandCursor enabled={wandEnabled} />
    </>
  );
}
