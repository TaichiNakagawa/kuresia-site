import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

export default function SideNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", isSection: true, sectionId: "home" },
    { name: "プロローグ", path: "/", isSection: true, sectionId: "prologue-preview" },
    { name: "ゲーム紹介", path: "/", isSection: true, sectionId: "game-intro" },
    { name: "キャラクター紹介", path: "/", isSection: true, sectionId: "character" },
    { name: "音楽ギャラリー", path: "/", isSection: true, sectionId: "music" },
    { name: "お問い合わせ", path: "/", isSection: true, sectionId: "contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 20;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setOpen(false); // スマホではスクロール後に閉じる
    }
  };

  const handleNavClick = (item) => {
    if (item.isSection) {
      if (location.pathname === "/") {
        // すでにトップページにいる → ただのスクロール
        handleScroll(item.sectionId);
      } else {
        // Home ボタンだけは Overlay を発火させたい
        if (item.name === "Home") {
          navigate("/", { state: { fromHomeButton: true } });
        } else {
          // 他のセクションはオーバーレイ不要
          navigate(`/#${item.sectionId}`, { state: { fromHomeButton: false } });
          setTimeout(() => handleScroll(item.sectionId), 100);
        }
      }
    } else {
      navigate(item.path);
      setOpen(false);
    }
  };

  const linkClass = `
    button-reset
    relative flex items-center w-full pl-4 py-2
    text-white font-semibold text-lg
    hover:text-yellow-300 hover:scale-105
    appearance-none border-none bg-transparent m-0 p-0 min-w-0
    transition-all duration-300
  `;

  return (
    <>
      {/* ハンバーガーメニュー（スマホのみ） */}
      {!open && (
        <button
          className="md:hidden fixed top-4 left-4 z-[100] p-3 bg-[#3e2723] text-[#f4e4bc] rounded-xl border border-[#d2b48c]/30 shadow-xl"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* オーバーレイ（スマホ時のみ & サイドバー開いた時だけ） */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* サイドバー */}
      <nav
        className={`
          fixed z-110 top-0 left-0 h-full w-60
          bg-gradient-to-b from-[#1b1109] via-[#2b1d10] to-[#1b1109]
          border-r-4 border-[#3e2723]
          shadow-[5px_0_30px_rgba(0,0,0,0.5)]
          flex flex-col items-start py-10 px-6
          text-[#f4e4bc] font-serif
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* 装飾用の縦線 */}
        <div className="absolute right-1 top-0 bottom-0 w-px bg-[#d2b48c]/10" />

        <div className="w-full mb-12 flex flex-col items-center">
          <span className="text-[#d2b48c] text-xs font-bold tracking-[0.3em] uppercase opacity-60 mb-1">Navigation</span>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d2b48c]/30 to-transparent" />
        </div>

        <ul className="flex flex-col space-y-4 w-full">
          {navItems.map((item) => (
            <li key={item.name} className="w-full relative group">
              <button
                onClick={() => handleNavClick(item)}
                type="button"
                className="button-reset relative flex items-center w-full py-3 px-2 text-lg font-bold text-[#d2b48c] hover:text-[#f4e4bc] transition-all duration-300 tracking-tight"
              >
                {/* ホバー時の装飾 */}
                <span className="absolute left-0 w-1 h-0 bg-[#d2b48c] rounded-full opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative z-10 group-hover:translate-x-3 transition-transform duration-300">
                  {item.name}
                </span>

                {/* ボタン背景のフェード */}
                <div className="absolute inset-0 bg-[#d2b48c]/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* 下部の装飾 */}
        <div className="mt-auto w-full pt-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d2b48c]/30 to-transparent mb-4" />
          <p className="text-[10px] text-[#d2b48c]/40 text-center font-sans tracking-widest uppercase">
            © Kuresia Project
          </p>
        </div>
      </nav>
    </>
  );
}
