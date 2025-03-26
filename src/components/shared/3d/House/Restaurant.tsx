"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";
function Restaurant() {
  const modelUrl = new URL("./restautrant.glb", import.meta.url).href;
  const { scene } = useGLTF(modelUrl);


  return (
    <mesh>
      <primitive  object={scene} />
    </mesh>
  );
}
useGLTF.preload(new URL("./restautrant.glb", import.meta.url).href);
export default Restaurant;
