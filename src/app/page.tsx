"use client";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModernGalleryV2Large } from "@/components/shared/3d/ModerGalleryV2Large/ModernGalleryV2Large";
import { createXRStore, XR } from "@react-three/xr";
import AudioPlayer from "@/components/shared/AutoAudioPlayer/AutoAudioPlayer";
const store = createXRStore();
export default function Home() {
  const handleEnterVR = () => {
    store.enterVR(); // Programmatic VR entry
  };
  return (
    <div className=" relative">
      <AudioPlayer />
      <div className=" w-full h-dvh">
        <button
          className="bg-black text-white absolute p-3 m-3 rounded-2xl left-1/2 -translate-x-1/2 z-40"
          onClick={handleEnterVR}
        >
          Enter VR
        </button>
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
