export default function CharacterSection() {
  const characters = [
    {
      id: 1,
      name: "クレシア",
      image: "/characters/kuresia.png",
      description: "魔法王国の王女。強力な光魔法を操り、仲間を守る。",
    },
    {
      id: 2,
      name: "ライナ",
      image: "/characters/raina.png",
      description: "クレシアの幼馴染であり守護騎士。クレシアと行動を共にする。",
    },
    {
      id: 3,
      name: "ベルギーニャ",
      image: "/characters/beruginya.png",
      description: "魔族。強力な魔法と知識でクレシア達をサポートする。",
    },
  ];

  return (
    <section style={{ padding: "50px 20px"}} className="bg-black">
     <div className="text-center mb-6 ">
      <h2 className="text-3xl font-bold mb-6 border-b border-green-400 inline-block pb-2 z-10">
        キャラクター紹介
      </h2>
    </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {characters.map((char) => (
          <div
            key={char.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              width: "300px", 
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              backdropFilter: "blur(5px)",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{
                width: "100%",
                maxHeight: "350px", // 高さ制限（縦長防止）
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{char.name}</h3>
            <p style={{ fontSize: "15px" }}>{char.description}</p>
          </div>
        ))}
      </div>
         <h2 style={{ color: "#fff", textAlign: "center", marginTop: "30px", zIndex: "30", position: "relative" }}>
        その他にも冒険を進めていく中で魅力的なキャラクターが多数登場！
      </h2>
    </section>
  );
}
