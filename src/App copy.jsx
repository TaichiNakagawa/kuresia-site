import './index.css';
import { useEffect, useState } from "react";
import NavBar from "./components/SideNav";
import BackgroundParticles from './components/function/BackgroundParticles';
import MagicWandCursor from './components/function/MagicWandCursor';
import CharacterSection from "./components/Section/CharacterSection";
import ContactFormSection from "./components/Section/ContactFormSection";

function App() {
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
    <div className="min-h-screen text-white">
      <BackgroundParticles />

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
       <NavBar navItems={["トップページ", "プロフィール", "ゲーム開発日記", "お問い合わせ"]} />
      {/* ヒーローセクション */}
      <header id="トップページ" className="flex flex-col items-center justify-center text-center pt-20 pb-10 px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">クレシア伝説</h1>
        <p className="text-xl text-gray-300 mb-8">
          「その一歩が、世界を変える」王道ファンタジーRPG
        </p>
        <img
          src="/main-visual.png"
          alt="ゲームメインビジュアル"
          className="w-full max-w-3xl rounded-xl shadow-lg mb-8 border-4 border-green-300"
        />
        <p className="text-xl text-gray-300 mb-8">
          対応プラットフォーム：Windows(ダウンロード版)<br />
          　　　　　　　　　　　　　　PC、スマートフォン(ブラウザ版)
        </p>
        <p className="text-xl text-gray-300 mb-8">
          公開日：未定
        </p>
      </header>

      {/* ゲーム紹介セクション */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-green-950 bg-opacity-80 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 border-b border-green-400 inline-block pb-2">
            ゲーム紹介
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            『クレシア伝説』は、広大な大陸と魔法世界を舞台にした王道ファンタジーRPGです。
            個性豊かな仲間たちと共に、世界の謎と運命に挑みましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-800 bg-opacity-60 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">壮大な物語</h3>
              <p className="text-gray-300 text-sm">
                出会いと別れ、友情と裏切り…感情を揺さぶるドラマがあなたを待っています。
              </p>
            </div>
            <div className="bg-green-800 bg-opacity-60 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">戦略バトル</h3>
              <p className="text-gray-300 text-sm">
                属性・スキル・装備を駆使した戦略的なコマンドバトルを楽しめます。
              </p>
            </div>
            <div className="bg-green-800 bg-opacity-60 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">広大な世界</h3>
              <p className="text-gray-300 text-sm">
                森林、砂漠、雪山など多彩なフィールドを冒険できます。
              </p>
            </div>
          </div>

          <div className="mt-12">
            <video width="640" height="360" controls>
              <source src="/gamepv1.mp4" type="video/mp4" />
              お使いのブラウザは動画タグに対応していません。
            </video>
          </div>
        </div>
      </section>

      {/* キャラクター紹介セクション */}
      <CharacterSection />
      {/* コンタクトフォームセクション */}
      <ContactFormSection id="お問い合わせ" />
    </div>
  );
}

export default App;
