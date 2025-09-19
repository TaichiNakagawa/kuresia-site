// src/pages/MusicGallery.jsx
import { useState, useRef } from "react";

export default function MusicGallery() {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // 初期音量 50%

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
      title: "南の洞窟",
      description: "不思議な雰囲気の、冒険の途中で訪れる南の洞窟の曲。",
      src: "/music/cave.mp3",
      image: "/music/cave.png",
    },
    {
      id: 4,
      title: "南の島",
      description: "冒険の途中で訪れる、南の島の曲。",
      src: "/music/iland.mp3",
      image: "/music/iland.png",
    },
  ];

  const handlePlay = (track) => {
      if (currentTrack?.id === track.id && isPlaying) {
        // 再生中の曲をクリックしたら停止
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // 新しい曲をセットして再生
        if (audioRef.current) {
          audioRef.current.src = track.src;
          audioRef.current.volume = volume;
          audioRef.current.play();
        }
        setCurrentTrack(track);
        setIsPlaying(true);
      }
    };

    const handleVolumeChange = (e) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 mt-5 relative z-10">
      <h2 className="text-4xl font-bold mb-6">音楽ギャラリー</h2>
      {/* 音量調整 */}
      <div className="flex items-center space-x-3 mt-6 hidden md:flex">
        <span className="text-sm">音量</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-40"
        />
      </div>
      {tracks.map((track) => (
        <div
          key={track.id}
          className="p-4 rounded-2xl flex gap-4 items-center"
        >
          {/* ジャケット画像 */}
          <img
            src={track.image}
            alt={track.title}
            className="w-24 h-24 object-cover rounded-lg shadow"
          />

          {/* 曲情報 */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{track.title}</h2>
            <p className="text-sm mb-2">{track.description}</p>

            <button
              onClick={() => handlePlay(track)}
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              {currentTrack?.id === track.id && isPlaying ? "⏸ 停止" : "▶ 再生"}
            </button>
          </div>
        </div>
      ))}
      {/* 共通 audio */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}
