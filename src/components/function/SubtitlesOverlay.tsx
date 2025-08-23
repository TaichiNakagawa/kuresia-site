import { useEffect, useState } from "react";

export default function SubtitlesOverlay() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false); // フェード用ステート

  useEffect(() => {
    // 3秒後にフェード開始
    const fadeTimer = setTimeout(() => setFade(true), 3000);
    // 4秒後に非表示
    const hideTimer = setTimeout(() => setShow(false), 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-[9999] pointer-events-none
        transition-opacity duration-1000
        ${fade ? "opacity-0" : "opacity-100"}
      `}
    >
      <p className="text-white text-2xl md:text-4xl animate-fade-in-up">
      「この世界は、君の物語だ。」
      </p>
    </div>
  );
}
