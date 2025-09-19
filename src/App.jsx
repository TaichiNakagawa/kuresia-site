import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SideNav from "./components/SideNav";
import HomePage from "./pages/Homepage/HomePage";
import MusicGallery from "./pages/MusicGallery";
import AbilitiesPage from "./pages/AbilitiesPage";
import BackgroundParticles from './components/function/BackgroundParticles';
import MagicWandController from "./components/function/MagicWandController";
import SubtitlesOverlay from "./components/function/SubtitlesOverlay";

function Layout() {
  const location = useLocation();
  const showOverlay =
    location.pathname === "/" &&  (location.state?.fromHomeButton || location.hash === "" || location.hash === "#home");

  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 md:ml-48 p-8">
        <BackgroundParticles />
        <MagicWandController />

        {/*最初にアクセスもしくは Home ボタンから来たときだけ表示 */}
        {showOverlay && <SubtitlesOverlay />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MusicGallery" element={<MusicGallery />} />
          <Route path="/abilities" element={<AbilitiesPage />} />
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
