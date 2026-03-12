import { useEffect, useState } from "react";
import PrologueTextFade from "../components/function/PrologueTextFade";

const scenes = [
  {
    image: "/prologue_a.png",
    lines: ["クレシア誘拐事件から2年――", "ライナは、クレシアの守護騎士に任命され、訓練を続けていた。"],
    duration: 5000,
  },
  {
    image: "/prologue_b.png",
    lines: ["そんなある日――", "今度は、クレシアの姉オリビアが誘拐されてしまう。"],
    duration: 5000,
  },
  {
    image: "/prologue_c.png",
    lines: ["オリビアを救う為――", "ライナは、クレシア(と道中で知り合った仲間達)と共に冒険へと旅立つ。"],
    duration: 5000,
  },
];

export default function ProloguePage() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // 自動進行
  useEffect(() => {
    if (!isAuto) return;
    if (sceneIndex >= scenes.length - 1) return;

    const timer = setTimeout(() => {
      setIsFading(true);

      setTimeout(() => {
        setSceneIndex((i) => i + 1);
        setIsFading(false);
      }, 800); // ← フェード時間
    }, scenes[sceneIndex].duration);

    return () => clearTimeout(timer);
  }, [sceneIndex, isAuto]);

  // 手動ジャンプ（自動解除）
  const jumpToScene = (index) => {
    setIsAuto(false);
    setIsFading(true);

    setTimeout(() => {
      setSceneIndex(index);
      setIsFading(false);
    }, 600);
  };

  const scene = scenes[sceneIndex];

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col">
      {/* 背景 */}
      <img
        src={scene.image}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover object-center md:object-center transition-opacity duration-700 ${isFading ? "opacity-0" : "opacity-100"
          }`}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* ===== タイトル（通常フロー） ===== */}
      <header className="relative z-20 pt-6 text-center">
        <h1 className="text-3xl font-bold tracking-widest">
          プロローグ
        </h1>
      </header>

      {/* ===== 本文エリア ===== */}
      <main
        className={`relative z-10 flex-1 flex items-center justify-center px-6 text-center transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="max-w-3xl">
          <PrologueTextFade key={sceneIndex} lines={scene.lines} />
        </div>
      </main>

      {/* ===== シーン選択 ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-5 z-30">
        {scenes.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpToScene(i)}
            className={`
            w-6 h-6
            aspect-square
            rounded-full
            box-border
            border border-white/70
            transition-all duration-300
            flex items-center justify-center
            ${i === sceneIndex
                ? "shadow-[0_0_14px_rgba(74,222,128,0.9)]"
                : "opacity-70 hover:opacity-100"}
          `}
          >
            {/* 中央核 */}
            {i === sceneIndex && (
              <span className="block w-2.5 h-2.5 rounded-full bg-green-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
