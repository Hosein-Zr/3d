"use client";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModernGalleryV2Large } from "@/components/shared/3d/ModerGalleryV2Large/ModernGalleryV2Large";
import { createXRStore, XR } from "@react-three/xr";
const store = createXRStore();
export default function Home() {
  return (
    <div className=" relative">

      <div className=" w-full h-dvh">
        <Canvas camera={{ position: [-50, 25, 10], far: 4000 }}>
          <pointLight
            intensity={1000}
            color={"red"}
            position={[-100, 200, 100]}
          />
          <CameraControls makeDefault />

          <XR store={store}>
            <ModernGalleryV2Large />
          </XR>
        </Canvas>
      </div>
    </div>
  );
}
