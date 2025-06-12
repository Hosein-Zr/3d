"use client";
import { Canvas } from "@react-three/fiber";
import { ModernGalleryV2Large } from "@/components/shared/3d/ModerGalleryV2Large/ModernGalleryV2Large";
import AudioPlayer from "@/components/shared/AutoAudioPlayer/AutoAudioPlayer";
import { ClientCameraController } from "@/components/shared/3d/KeyboardCameraController";

export default function Home() {
  return (
    <div className=" relative">
      <AudioPlayer />
      <div className=" w-full h-dvh">
        <Canvas camera={{ position: [7, 1.2, 0], far: 4000 }}>
          <pointLight
            intensity={1000}
            color={"red"}
            position={[-100, 200, 100]}
          />
          <ClientCameraController />
          <ModernGalleryV2Large />
        </Canvas>
      </div>
    </div>
  );
}
