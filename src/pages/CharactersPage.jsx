// CharactersPage.jsx
import SideNav from "../components/SideNav";

export default function CharactersPage() {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 md:ml-48 p-8">
        <h2 className="text-4xl font-bold mb-6">Characters Page</h2>
        <p>キャラクター詳細情報を表示</p>
      </main>
    </div>
  );
}
