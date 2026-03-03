import { useState } from "react";

// 個別のキャラクターカードコンポーネント
function CharacterCard({ char }) {
  const [selectedExpressionIdx, setSelectedExpressionIdx] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-stretch py-10 border-b border-[#d2b48c]/10 last:border-0 relative z-10">

      {/* 左側：メインビジュアルエリア */}
      <div className="lg:w-[50%] w-full flex flex-col md:flex-row gap-4">

        {/* 表情切り替え */}
        <div className="flex md:flex-col gap-3 order-2 md:order-1 justify-center md:justify-start pt-6">
          <div className="bg-[#1b1109]/40 p-3 rounded-2xl shadow-inner border border-[#d2b48c]/10 backdrop-blur-sm">
            <p className="text-[9px] font-black text-[#d2b48c]/60 mb-3 tracking-tighter uppercase text-center hidden md:block leading-none">Visual<br />Change</p>
            <div className="flex md:flex-col gap-3">
              {char.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedExpressionIdx(i)}
                  className={`relative group transition-all duration-300 ${selectedExpressionIdx === i ? "scale-110" : "scale-100 hover:scale-105"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${selectedExpressionIdx === i ? "border-yellow-600 shadow-lg shadow-yellow-900/50" : "border-[#3e2723]/50 group-hover:border-yellow-600/50"
                    }`}>
                    <img src={img} alt="" className="w-full h-full object-cover scale-[2.5] translate-y-2 opacity-90 group-hover:opacity-100" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* メインイラスト表示部 */}
        <div className="flex-1 relative bg-[#1b1109]/30 rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px] flex justify-center items-end border border-[#d2b48c]/5 order-1 md:order-2 backdrop-blur-[2px]">
          <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] font-black opacity-[0.03] cursor-default select-none rotate-[-10deg] whitespace-nowrap text-[#f4e4bc]`}>
            {char.enName}
          </div>

          <img
            key={selectedExpressionIdx}
            src={char.images[selectedExpressionIdx]}
            alt={char.name}
            className="relative z-10 w-auto h-full max-h-[450px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-fade-in-up"
          />
        </div>
      </div>

      {/* 右側：プロフィール情報 */}
      <div className="lg:w-[50%] w-full flex flex-col justify-center py-2">
        <div className="mb-6">
          <span className={`text-lg font-bold text-[#d2b48c] tracking-widest opacity-80`}>{char.enName}</span>
          <div className="flex items-baseline gap-3 mt-1">
            <h2 className="text-4xl font-black tracking-tighter text-[#f4e4bc] drop-shadow-md">{char.name}</h2>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-[#f4e4bc]/80 mb-8 font-medium italic">
          {char.description}
        </p>

        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          {Object.entries(char.profile).map(([key, value]) => (
            <div key={key} className="flex flex-col border-b border-[#d2b48c]/10 pb-1">
              <span className={`text-[11px] font-bold uppercase tracking-widest text-[#d2b48c] opacity-60`}>
                {key === 'birthday' ? '誕生日' : key === 'height' ? '身長' : key === 'weight' ? '体重' : '趣味'}
              </span>
              <span className="text-xl font-black text-[#f4e4bc] drop-shadow-sm">{value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function CharacterSection() {
  const characters = [
    {
      id: 1,
      name: "クレシア",
      enName: "KURESIA",
      images: ["/characters/kuresia1.png", "/characters/kuresia2.png", "/characters/kuresia3.png"],
      description: "ヴァシリス王国の第２王女。魔法の才能があり、パーティのメイジ。天真爛漫な性格だが、国と民を守るという強い使命感がある。オリビア姉様を救うため、ライナと共に城の外の世界へと飛び出す。",
      profile: {
        birthday: "4月12日",
        height: "158cm",
        weight: "45kg",
        hobby: "お菓子作り",
      },
      themeColor: "from-yellow-400 to-orange-500",
      accentColor: "text-orange-600",
      borderColor: "border-yellow-200"
    },
    {
      id: 2,
      name: "ライナ",
      enName: "RAINA",
      images: ["/characters/raina1.png", "/characters/raina2.png", "/characters/raina3.png"],
      description: "クレシアの幼馴染であり、若くして守護騎士に任命された天才剣士。実直で真面目な性格。2年前のクレシア誘拐事件の際、自らの力不足を痛感。それ以来死に物狂いで剣技を磨いてきた。クレシアを命に代えても守り抜くことを誓っている。",
      profile: {
        birthday: "8月20日",
        height: "165cm",
        weight: "52kg",
        hobby: "剣の素振り、釣り",
      },
      themeColor: "from-blue-400 to-indigo-500",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      name: "ベルギーニャ",
      enName: "BERUGINYA",
      images: ["/characters/beruginya1.png", "/characters/beruginya2.png", "/characters/beruginya3.png"],
      description: "人里離れた島に住む魔族。膨大な知識と魔法能力を持つ。かつて人間との戦争で傷ついた過去を持つが、クレシアの純真な心に触れ、彼女たちの旅をサポートすることを決意。相手を煽るような言動を取るが、常に冷静。",
      profile: {
        birthday: "11月3日",
        height: "148cm",
        weight: "秘密",
        hobby: "読書、古いお茶の収集",
      },
      themeColor: "from-purple-400 to-fuchsia-500",
      accentColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 relative z-10 mx-4 overflow-hidden">
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl font-black tracking-tighter mb-2 text-[#f4e4bc] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">CHARACTERS</h2>
        <p className="text-lg text-[#d2b48c] font-bold opacity-90 italic drop-shadow-md">個性豊かな冒険の仲間たち</p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <div className="bg-[#1b1109]/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-[#d2b48c]/30 shadow-[0_0_30px_rgba(210,180,140,0.1)] relative group">
          {/* 四隅の装飾 */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d2b48c]/40 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d2b48c]/40 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d2b48c]/40 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d2b48c]/40 rounded-br-lg" />

          <p className="text-[#f4e4bc] text-xl md:text-2xl font-black tracking-[0.2em] drop-shadow-lg">
            AND MORE...
          </p>
          <p className="text-[#d2b48c] text-lg font-bold mt-2 opacity-90 tracking-widest">
            その他にも多数の個性的なキャラクターが登場！
          </p>
        </div>
      </div>
    </section>
  );
}
