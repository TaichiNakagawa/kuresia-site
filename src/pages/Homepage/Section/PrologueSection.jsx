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
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-green-400 relative aspect-video flex items-center justify-center">
                {/* 背景画像 */}
                <img
                    src={scenes[sceneIndex].image}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isFading ? "opacity-0" : "opacity-100"
                        }`}
                />
                <div className="absolute inset-0 bg-black/50" />

                {/* テキスト内容 */}
                <div className="relative z-10 text-center px-4">
                    <h3 className="text-2xl font-bold text-green-300 mb-6 tracking-widest">PROLOGUE</h3>
                    <div className={`transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
                        <PrologueTextFade key={sceneIndex} lines={scenes[sceneIndex].lines} />
                    </div>
                </div>

                {/* 進行インジケーター */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {scenes.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-500 ${i === sceneIndex ? "w-8 bg-green-400" : "w-2 bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="text-center mt-10">
                <p className="text-2xl text-white font-medium italic">
                    「物語の続きは、あなたの手で――」
                </p>
            </div>
        </section>
    );
}
