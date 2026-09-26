// Loader screen view during the loading of the glb files
import { useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress(); // authomatically tracks the status of all the active three.js loaders

  return (
    <div className="loader-overlay">
      <div className="loader-bar-track">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="loader-text">{Math.round(progress)}%</span>
    </div>
  );
}
