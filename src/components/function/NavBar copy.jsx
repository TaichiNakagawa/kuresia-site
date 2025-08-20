export default function NavBar({ navItems = ["トップページ", "プロフィール", "ゲーム開発日記", "お問い合わせ"] }) {
  return (
    <>
      {/* 左側ナビゲーション */}
      <nav className="fixed top-0 left-0 h-full w-48 bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-700 bg-opacity-80 backdrop-blur-md shadow-lg z-[1000] flex flex-col items-start py-10 px-4">

        {/* ナビリンク */}
        <ul className="flex flex-col space-y-6 w-full">
          {navItems.map((item) => (
            <li key={item} className="w-full">
              <a
                href={"#" + item.toLowerCase()}
                className="text-white hover:text-yellow-300 relative transition-colors duration-300
                           before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:h-full block pl-4"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ページコンテンツが被らないように左マージン */}
      <div className="ml-48"></div>
    </>
  );
}