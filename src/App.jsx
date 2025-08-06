import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundParticles />

      <header className="flex flex-col items-center justify-center text-center pt-20 pb-10 px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">運命の聖戦</h1>
        <p className="text-xl text-gray-300 mb-8">
          「その一歩が、世界を変える」王道ファンタジーRPG
        </p>
        <img
          src="/main-visual.png"
          alt="ゲームメインビジュアル"
          className="w-full max-w-3xl rounded-xl shadow-lg mb-8"
        />
        <a
          href="#"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          今すぐプレイ
        </a>
      </header>
    </div>
  );
}

export default App;
