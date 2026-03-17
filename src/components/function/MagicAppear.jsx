export default function MagicAppear({ children }) {
  // アニメーションを一時的に無効化し、そのままコンテンツを表示する
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        {/* 背景の装飾は残す場合 */}
        <div className="absolute inset-0 rounded-full opacity-30 animate-spin-slow pointer-events-none"></div>
        {children}
      </div>
    </div>
  );
}


