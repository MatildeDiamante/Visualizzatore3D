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
        <h1>{activeModel.name}</h1>
      </header>

      <main className="viewer-area">
        <Scene glbPath={activeModel.glbPath} />
      </main>

      <footer className="selector-area">
        <ModelSelector
          models={models}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </footer>
    </div>
  );
}
