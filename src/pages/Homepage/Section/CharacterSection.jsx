import { useState } from "react";

export default function CharacterSection() {
  const characters = [
    {
      id: 1,
      name: "クレシア",
      images: ["/characters/kuresia1.png", "/characters/kuresia2.png", "/characters/kuresia3.png"],
      description: "魔法王国の王女。強力な光魔法を操り、仲間を守る。",
    },
    {
      id: 2,
      name: "ライナ",
      images: ["/characters/raina1.png", "/characters/raina2.png", "/characters/raina3.png"],
      description: "クレシアの幼馴染であり守護騎士。クレシアと行動を共にする。",
    },
    {
      id: 3,
      name: "ベルギーニャ",
      images: ["/characters/beruginya1.png", "/characters/beruginya2.png", "/characters/beruginya3.png"],
      description: "魔族。強力な魔法と知識でクレシア達をサポートする。",
    },
  ];

  // 各キャラクターの現在の表情インデックスを管理
  const [faceIndexes, setFaceIndexes] = useState(characters.map(() => 0));

  const handleImageClick = (index) => {
    setFaceIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] + 1) % characters[index].images.length;
      return newIndexes;
    });
  };

  return (
    <section className="py-16 px-6 relative z-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-6 border-b border-green-400 inline-block pb-2 z-10">
          キャラクター紹介
        </h2>
      </div>
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "0px",
            zIndex: "30",
            position: "relative",
          }}
        >
        画像クリックで表情切り替え
        </h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {characters.map((char, idx) => (
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
              cursor: "pointer", // クリック可能であることを示す
            }}
            onClick={() => handleImageClick(idx)}
          >
            <img
              src={char.images[faceIndexes[idx]]}
              alt={char.name}
              style={{
                width: "100%",
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
                transition: "0.3s ease", // 表情切替アニメーション
              }}
            />
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{char.name}</h3>
            <p style={{ fontSize: "15px" }}>{char.description}</p>
          </div>
        ))}
      </div>

      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: "30px",
          zIndex: "30",
          position: "relative",
        }}
      >
        その他にも冒険を進めていく中で魅力的なキャラクターが多数登場！
      </h2>
    </section>
  );
}
