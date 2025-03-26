import { useGLTF } from "@react-three/drei";
import React from "react";

function Computer() {
  const computerModleURL = new URL("./computer.glb", import.meta.url).href;
  const { scene } = useGLTF(computerModleURL);

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}
useGLTF.preload(new URL("./computer.glb", import.meta.url).href);
export default Computer;
