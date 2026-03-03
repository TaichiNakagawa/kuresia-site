import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SideNav from "./components/SideNav";
import HomePage from "./pages/Homepage/HomePage";
import BackgroundParticles from './components/function/BackgroundParticles';
import MagicWandController from "./components/function/MagicWandController";
import SubtitlesOverlay from "./components/function/SubtitlesOverlay";

function Layout() {
  const location = useLocation();

  // ===== パーティクルを出さないページ =====
  const noParticlesPages = [];
  const showParticles = !noParticlesPages.includes(location.pathname);

  const showOverlay =
    location.pathname === "/" && (location.state?.fromHomeButton || location.hash === "" || location.hash === "#home");

  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 md:ml-48 p-8">
        {/* 背景演出 */}
        {showParticles && <BackgroundParticles />}

        {/* 杖演出 */}
        <MagicWandController />

        {/*最初にアクセスもしくは Home ボタンから来たときだけ表示 */}
        {showOverlay && <SubtitlesOverlay />}

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
