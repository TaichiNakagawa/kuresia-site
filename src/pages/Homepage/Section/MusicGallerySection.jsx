import { useState, useRef } from "react";

export default function MusicGallerySection() {
    const audioRef = useRef(null);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const tracks = [
        {
            id: 1,
            title: "旅立ちの城",
            description: "クレシア達の冒険の始まりの城の曲。",
            src: "/music/castle_WebMaster.mp3",
            image: "/music/castle.png",
        },
        {
            id: 2,
            title: "荒廃した森",
            description: "序盤で訪れる、荒廃した森の曲。",
            src: "/music/forest_WebMaster.mp3",
            image: "/music/forest.png",
        },
        {
            id: 3,
            title: "南の洞窟",
            description: "不思議な雰囲気の、冒険の途中で訪れる南の洞窟の曲。",
            src: "/music/cave_WebMaster.mp3",
            image: "/music/cave.png",
        },
        {
            id: 4,
            title: "南の島",
            description: "冒険の途中で訪れる、南の島の曲。",
            src: "/music/iland_WebMaster.mp3",
            image: "/music/iland.png",
        },
    ];

    const handlePlay = (track) => {
        if (currentTrack?.id === track.id) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
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
        <section id="music-gallery" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black tracking-tighter mb-2 text-[#f4e4bc] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">MUSIC GALLERY</h2>
                    <p className="text-lg text-[#d2b48c] font-bold opacity-90 italic drop-shadow-md">冒険を彩る旋律</p>
                </div>

                {/* 音量調整 */}
                <div className="flex items-center justify-end space-x-4 mb-8 text-[#d2b48c]">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-70">Volume</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-32 accent-[#8b4513] bg-[#1b1109]/40 rounded-lg appearance-none h-1"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            className={`p-5 rounded-2xl flex gap-5 items-center transition-all duration-300 border border-[#d2b48c]/10 bg-[#1b1109]/30 backdrop-blur-sm shadow-xl ${currentTrack?.id === track.id && isPlaying ? "scale-[1.02] border-[#8b4513]/50 ring-2 ring-[#8b4513]/20" : "hover:bg-[#1b1109]/50"
                                }`}
                        >
                            <div className="relative group flex-shrink-0">
                                <img
                                    src={track.image}
                                    alt={track.title}
                                    className="w-24 h-24 object-cover rounded-xl shadow-lg border border-[#d2b48c]/10 transition-transform group-hover:rotate-3"
                                />
                                {currentTrack?.id === track.id && isPlaying && (
                                    <div className="absolute inset-0 bg-[#3e2723]/40 flex items-center justify-center rounded-xl animate-pulse">
                                        <div className="flex gap-1 items-end h-8">
                                            <div className="w-1 bg-[#f4e4bc] animate-[music-bar_1s_infinite_0.1s]" />
                                            <div className="w-1 bg-[#f4e4bc] animate-[music-bar_1s_infinite_0.3s]" />
                                            <div className="w-1 bg-[#f4e4bc] animate-[music-bar_1s_infinite_0.5s]" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-black text-[#f4e4bc] mb-1 drop-shadow-sm">{track.title}</h3>
                                <p className="text-sm text-[#d2b48c] font-medium leading-relaxed opacity-80 mb-4 h-10 overflow-hidden line-clamp-2 italic">
                                    {track.description}
                                </p>

                                <button
                                    onClick={() => handlePlay(track)}
                                    className={`px-5 py-2 rounded-lg text-sm font-black transition-all flex items-center gap-2 ${currentTrack?.id === track.id && isPlaying
                                        ? "bg-[#3e2723] text-[#f4e4bc] border border-[#d2b48c]/30"
                                        : "bg-[#8b4513] text-[#f4e4bc] shadow-lg hover:bg-[#a0522d] active:scale-95"
                                        }`}
                                >
                                    {currentTrack?.id === track.id && isPlaying ? (
                                        <><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> PAUSE</>
                                    ) : (
                                        <><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg> PLAY</>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <div className="bg-[#1b1109]/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-[#d2b48c]/30 shadow-[0_0_30px_rgba(210,180,140,0.1)] relative group">
                        {/* 四隅の装飾 */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d2b48c]/40 rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d2b48c]/40 rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d2b48c]/40 rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d2b48c]/40 rounded-br-lg" />

                        <p className="text-[#f4e4bc] text-xl md:text-2xl font-black tracking-[0.2em] drop-shadow-lg uppercase">
                            And More Tracks...
                        </p>
                        <p className="text-[#d2b48c] text-lg font-bold mt-2 opacity-90 tracking-widest">
                            その他にも物語を彩る多数の楽曲を収録！
                        </p>
                    </div>
                </div>
            </div>
            <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes music-bar {
          0%, 100% { height: 8px; }
          50% { height: 24px; }
        }
      `}} />
        </section>
    );
}
