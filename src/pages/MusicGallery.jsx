// src/pages/MusicGallery.jsx
import { useState, useRef } from "react";

export default function MusicGallery() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: "旅立ちの城",
      description: "クレシア達の冒険の始まりの城の曲。",
      src: "/music/castle.mp3",
      image: "/music/castle.png",
    },
    {
      id: 2,
      title: "荒廃した森",
      description: "序盤で訪れる、荒廃した森の曲。",
      src: "/music/forest.mp3",
      image: "/music/forest.png",
    },
    {
      id: 3,
      title: "南の海",
      description: "南国感のある、冒険の途中で訪れる南の海の曲。",
      src: "/music/ship.ogg",
      image: "/music/ship.png",
    },
    {
      id: 4,
      title: "草原",
      description: "冒険の途中で訪れる、草原の曲。",
      src: "/music/weed.ogg",
      image: "/music/weed.png",
    },
  ];

  const handlePlay = (track) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(track.src);
    audioRef.current = audio;
    audio.play();
    setCurrentTrack(track.id);

    audio.onended = () => {
      setCurrentTrack(null);
    };
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentTrack(null);
  };

  return (
    <section className="py-16 px-6 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold border-b border-green-400 inline-block pb-2">
          🎵 音楽ギャラリー
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-black/50 rounded-lg p-6 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
            <img
            src={track.image}
            alt={track.title}
            className="w-full object-contain rounded-md mb-4"
          />
            <p className="text-sm mb-4">{track.description}</p>
            <div className="flex gap-3">
              {currentTrack === track.id ? (
                <button
                  onClick={handleStop}
                  className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
                >
                  停止
                </button>
              ) : (
                <button
                  onClick={() => handlePlay(track)}
                  className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600"
                >
                  再生
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
