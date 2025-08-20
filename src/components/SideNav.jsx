import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

export default function SideNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", isSection: true, sectionId: "home" },
    { name: "ゲーム紹介", path: "/", isSection: true, sectionId: "game-intro" },
    { name: "キャラクター紹介", path: "/", isSection: true, sectionId: "character" },
    { name: "お問い合わせ", path: "/", isSection: true, sectionId: "contact" },
    { name: "Characters Page", path: "/characters", isSection: false },
    { name: "Abilities Page", path: "/abilities", isSection: false },
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
        handleScroll(item.sectionId);
      } else {
        // トップページに遷移してからスクロール
        navigate(`/#${item.sectionId}`);
        setTimeout(() => handleScroll(item.sectionId), 100); // 遷移後に少し待ってスクロール
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
          className="md:hidden fixed top-4 left-4 z-[1000] p-2 bg-purple-700 text-white rounded-lg"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* オーバーレイ（スマホ時のみ & サイドバー開いた時だけ） */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[1050] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* サイドバー */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-48 
          bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-700 bg-opacity-80
          backdrop-blur-md shadow-lg z-[1100] flex flex-col items-start py-10 px-4
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="text-white font-extrabold text-2xl mb-10 tracking-wider">
          クレシア伝説
        </div>
        <ul className="flex flex-col space-y-6 w-full">
          {navItems.map((item) => (
            <li key={item.name} className="w-full relative">
              <button
                onClick={() => handleNavClick(item)}
                type="button"
                className={linkClass}
              >
                <span className="absolute -left-3 w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
