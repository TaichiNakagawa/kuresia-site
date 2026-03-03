import { useEffect, useState } from "react";
import PrologueTextFade from "../../../components/function/PrologueTextFade";

const scenes = [
    {
        image: "/prologue1.png",
        lines: ["クレシア誘拐事件から2年――", "ライナは、クレシアの守護騎士に任命され、訓練を続けていた。"],
        duration: 5000,
    },
    {
        image: "/prologue2.png",
        lines: ["そんなある日――", "今度は、クレシアの姉オリビアが誘拐されてしまう。"],
        duration: 5000,
    },
    {
        image: "/prologue3.png",
        lines: ["オリビアを救う為――", "ライナは、クレシアと共に冒険へと旅立つ。"],
        duration: 5000,
    },
];

export default function PrologueSection() {
    const [sceneIndex, setSceneIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // 自動ループ
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setSceneIndex((i) => (i + 1) % scenes.length);
                setIsFading(false);
            }, 700);
        }, scenes[sceneIndex].duration);

        return () => clearTimeout(timer);
    }, [sceneIndex]);

    return (
        <section className="py-12 md:py-16 px-2 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#3e2723] relative aspect-[4/5] xs:aspect-[3/2] md:aspect-video flex items-center justify-center group">
                {/* 背景画像 */}
                <img
                    src={scenes[sceneIndex].image}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform duration-[5000ms] ${isFading ? "opacity-0" : "opacity-100"
                        }`}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

                {/* 装飾枠 */}
                <div className="absolute inset-4 border border-[#d2b48c]/20 rounded-xl md:rounded-2xl pointer-events-none" />

                {/* テキスト内容 */}
                <div className="relative z-10 text-center px-4 md:px-8">
                    <div className={`transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
                        <PrologueTextFade key={sceneIndex} lines={scenes[sceneIndex].lines} />
                    </div>
                </div>

                {/* 進行インジケーター */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
                    {scenes.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 md:h-2 rounded-full transition-all duration-500 ${i === sceneIndex ? "w-6 md:w-8 bg-[#d2b48c]" : "w-1.5 md:w-2 bg-white/20"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="text-center mt-8 md:mt-10 px-4">
                <p className="text-lg md:text-2xl text-[#f4e4bc] font-bold italic tracking-wider drop-shadow-md">
                    「物語の続きは、あなたの手で――」
                </p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d2b48c]/30 to-transparent mx-auto mt-4" />
            </div>
        </section>
    );
}
