import CharacterSection from "./Section/CharacterSection";
import ContactFormSection from "./Section/ContactFormSection";
import PrologueSection from "./Section/PrologueSection";
import MusicGallerySection from "./Section/MusicGallerySection";
import MagicAppear from "../../components/function/MagicAppear";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-24 pb-20 relative">
      {/* 背景の装飾（セピア調の煙のような演出） */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b1109] mix-blend-multiply opacity-20" />
      </div>

      {/* ヒーローセクション */}
      <MagicAppear>
        <section id="home" className="flex flex-col items-center justify-center text-center pt-24 pb-16 px-4 relative z-20">
          <div className="relative mb-6">
            <h1 className="text-6xl md:text-9xl font-black mb-2 text-[#f4e4bc] drop-shadow-[4px_4px_0px_rgba(43,29,16,1)] italic tracking-tighter">
              <span className="text-[#d2b48c]">クレシア</span>伝説
            </h1>
          </div>

          <div className="bg-[#2b1d10]/60 backdrop-blur-md px-10 py-6 rounded-xl border border-[#d2b48c]/20 mb-12 transform -rotate-1 shadow-2xl">
            <p className="text-2xl md:text-5xl font-black text-[#f4e4bc] tracking-tighter drop-shadow-sm">
              「その一歩が、世界を変える」
            </p>
            <p className="text-xl md:text-2xl text-[#d2b48c] mt-3 font-bold italic tracking-widest opacity-90">
              AN EPIC TALE UNFOLDS...
            </p>
          </div>

          <div className="relative group cursor-pointer max-w-4xl w-full">
            <div className="absolute inset-0 bg-yellow-900/20 blur-3xl group-hover:bg-yellow-800/30 transition-all" />
            <img
              src="/main-visual.png"
              alt="ゲームメインビジュアル"
              className="w-full relative rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)] border-8 border-[#3e2723] group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 border-[12px] border-[#d2b48c]/5 pointer-events-none rounded-3xl" />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
              <span className="text-gray-400 text-sm block uppercase tracking-widest">Platform</span>
              <span className="text-xl font-bold text-white">Windows / Browser</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
              <span className="text-gray-400 text-sm block uppercase tracking-widest">Release Date</span>
              <span className="text-xl font-bold text-white">Coming Soon!</span>
            </div>
          </div>
        </section>
      </MagicAppear>

      {/* プロローグセクション (最初から見えるように) */}
      <section id="prologue-preview" className="bg-gradient-to-b from-transparent via-[#3e2723]/20 to-transparent py-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-[#f4e4bc] tracking-widest drop-shadow-lg">物語の始まり</h2>
          <div className="w-24 h-1 bg-[#d2b48c]/30 mx-auto mt-2" />
        </div>
        <PrologueSection />
      </section>

      {/* ゲーム紹介セクション */}
      <MagicAppear>
        <section id="game-intro" className="py-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-[#f4e4bc] italic tracking-tighter drop-shadow-lg">
              ゲーム <span className="text-[#d2b48c]">紹介</span>
            </h2>

            <p className="text-2xl text-[#d2b48c] mb-16 leading-loose text-center max-w-3xl drop-shadow-sm">
              『クレシア伝説』は、広大な大陸と魔法世界を舞台にした<br className="hidden md:block" />
              <span className="text-[#f4e4bc] font-bold underline decoration-[#d2b48c] decoration-4">王道ファンタジーRPG</span>です。<br />
              個性豊かな仲間たちと共に、世界の謎と運命に挑みましょう。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full font-serif">
              {[
                { title: "壮大な物語", desc: "出会いと別れ、友情と裏切り…感情を揺さぶるドラマがあなたを待っています。" },
                { title: "戦略バトル", desc: "属性・スキル・装備を駆使した戦略的なコマンドバトルを楽しめます。" },
                { title: "広大な世界", desc: "森林、砂漠、雪山など多彩なフィールドを縦横無尽に冒険できます。" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1b1109]/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-[#d2b48c]/20 border-b-4 transform hover:-translate-y-2 transition-all duration-300 group">
                  <h3 className="text-2xl font-black mb-4 text-[#f4e4bc] group-hover:text-white transition-colors tracking-tight">{item.title}</h3>
                  <p className="text-lg text-[#d2b48c]/80 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 w-full max-w-4xl overflow-hidden rounded-2xl border-4 border-[#3e2723] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
              <div className="absolute inset-0 border-8 border-[#d2b48c]/10 pointer-events-none" />
              <video width="100%" height="auto" controls className="w-full">
                <source src="/gamepv1.mp4" type="video/mp4" />
                お使いのブラウザは動画タグに対応していません。
              </video>
            </div>
          </div>
        </section>
      </MagicAppear>

      {/* キャラクター紹介セクション */}
      <MagicAppear>
        <section id="character">
          <CharacterSection />
        </section>
      </MagicAppear>

      {/* 音楽ギャラリーセクション */}
      <MagicAppear>
        <section id="music">
          <MusicGallerySection />
        </section>
      </MagicAppear>

      {/* お問い合わせセクション */}
      <MagicAppear>
        <section id="contact">
          <ContactFormSection />
        </section>
      </MagicAppear>
    </div>
  );
}
