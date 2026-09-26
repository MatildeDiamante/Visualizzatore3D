// Manages Three.js: lights, controls, and the active model
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";
import Loader from "./Loader";

interface SceneProps {
  glbUrl: string;
}

export default function Scene({ glbUrl }: SceneProps) {
  return (
    <div className="scene-container">
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model key={glbUrl} path={glbUrl} />
          <Environment preset="city" />
          <OrbitControls enableDamping />
        </Canvas>
      </Suspense>
    </div>
  );
}
