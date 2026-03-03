import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubtitlesOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // 画面幅チェック
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 400);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    // 5秒後に全体を消す
    const timer = setTimeout(() => setIsVisible(false), 5500);
    return () => {
      window.removeEventListener("resize", checkScreen);
      clearTimeout(timer);
    };
  }, []);

  const text = "「 この世界は、君の物語だ。 」";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
          className="fixed inset-0 w-full h-full flex items-center justify-center bg-[#0a0705] z-[9999] pointer-events-none overflow-hidden"
        >
          {/* 背景の魔法陣エフェクト */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={{ opacity: 0.15, scale: 1.2, rotate: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute w-[800px] h-[800px] border-double border-8 border-[#d2b48c] rounded-full flex items-center justify-center"
          >
            <div className="absolute inset-4 border-2 border-[#d2b48c] rounded-full opacity-50" />
            <div className="absolute inset-20 border border-[#d2b48c] rounded-full opacity-30" />
          </motion.div>

          {/* 背景の粒子 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,180,140,0.05)_0%,transparent_70%)]" />

          {/* 字幕テキスト */}
          <div className="relative z-10 text-center px-4 w-full">
            <motion.div
              className={`text-[#f4e4bc] ${isSmallScreen ? "text-lg" : "text-2xl md:text-5xl"} font-serif tracking-[0.3em] font-bold drop-shadow-[0_0_15px_rgba(210,180,140,0.4)] whitespace-nowrap`}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.5 + index * 0.12,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 0.3, width: "100%" }}
              transition={{ delay: 1.5, duration: 2 }}
              className="h-px bg-gradient-to-r from-transparent via-[#d2b48c] to-transparent mt-8 mx-auto max-w-sm"
            />
          </div>

          {/* 画面端のヴィネット */}
          {!isSmallScreen && (
            <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
