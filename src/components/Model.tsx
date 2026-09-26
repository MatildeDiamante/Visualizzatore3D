// Loads every glb file, centrates them and scales them to fill consistently the space

import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";

interface ModelProps {
  path: string;
}

export default function Model({ path }: ModelProps) {
  const { scene } = useGLTF(path);
  const groupRef = useRef<Group>(null);

  // Clones the scene to avoid side effects when the same glb file is reused
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    if (!groupRef.current) return;

    const box = new Box3().setFromObject(clonedScene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Centrates the model in the origin
    clonedScene.position.sub(center);

    // Scales the model in order to put in a cube of side ~2
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? 5 / maxDim : 1;
    groupRef.current.scale.setScalar(scale);
  }, [clonedScene]);

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
}