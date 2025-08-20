import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import HomePage from "./pages/Homepage/HomePage";
import CharactersPage from "./pages/CharactersPage";
import AbilitiesPage from "./pages/AbilitiesPage";
import BackgroundParticles from './components/function/BackgroundParticles';
import MagicWandController from "./components/function/MagicWandController";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* サイドバー等 */}
        <SideNav />
        
        {/* メインコンテンツ */}
        <main className="flex-1 md:ml-48 p-8">
          <BackgroundParticles />
          <MagicWandController />
          
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/abilities" element={<AbilitiesPage />} />
          </Routes>
         </main>
        </div>
    </Router>
  );
}

export default App;
