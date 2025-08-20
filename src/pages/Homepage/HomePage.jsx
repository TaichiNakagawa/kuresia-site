import CharacterSection from "./Section/CharacterSection";
import ContactFormSection from "./Section/ContactFormSection";

export default function HomePage() {
  return (
      <div className="flex flex-col space-y-16">
      {/* ヒーローセクション */}
      <section id="home" className="flex flex-col items-center justify-center text-center pt-20 pb-10 px-4 relative z-10">
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
      </section>

      {/* ゲーム紹介セクション */}
      <section id="game-intro" className="py-16 px-6 relative z-10">
        <div className="flex flex-col max-w-4xl mx-auto items-center justify-center text-center pt-20 pb-10 px-4 relative z-10">
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
      <section id="character">
        <CharacterSection />
      </section>
      
      {/* お問い合わせセクション */}
      <section id="contact">
        <ContactFormSection />
      </section>
    </div>
  );
}
