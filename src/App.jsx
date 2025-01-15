import Card from "./components/Card";
import { effects } from "./components/effects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Hover Effects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto p-4">
        {effects.map((effect) => (
          <Card key={effect.id} effectName={effect.name} className={effect.className} />
        ))}
      </div>
    </div>
  );
}
