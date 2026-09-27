import { useState } from "react";
import Scene from "./components/Scene";
import ModelSelector from "./components/ModelSelector";
import { models } from "./data/models";
import "./App.css";

export default function App() {
  const [activeId, setActiveId] = useState(models[0].id);
  const activeModel = models.find((m) => m.id === activeId)!;

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <span className="text-gradient">Udine</span> ancient wells:
        </h1>
        <h2>
          a comparison between <span className="text-gradient">COLMAP</span> and{" "}
          <span className="text-gradient">TRELLIS</span>
        </h2>
        <h3>
          <span className="text-gradient">{activeModel.name}</span>
        </h3>
      </header>

      <main className="viewer-area">
        <Scene glbUrl={activeModel.glbUrl} />{" "}
      </main>

      <footer className="selector-area">
        <ModelSelector
          models={models}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <div className="credits">
          Open-source code created by{" "}
          <span className="text-gradient">Matilde Moretti</span> with React and Three.js
        </div>
      </footer>
    </div>
  );
}
