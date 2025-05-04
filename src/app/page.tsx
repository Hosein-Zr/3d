"use client";
import Landing from "@/components/app/HomePage/Landing";
import LetsGoButton from "@/components/app/HomePage/LetsGoButton";
import { ForestHouseModel } from "@/components/shared/3d/ForestHouse/ForestHouseModel";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAnimationStore } from "../../store/zustandStore";
import AudioPlayer from "@/components/shared/AutoAudioPlayer/AutoAudioPlayer";
import { ModernGalleryV2Large } from "@/components/shared/3d/ModerGalleryV2Large/ModernGalleryV2Large";

export default function Home() {
  const { isLetsGoButtonVisible } = useAnimationStore();
  return (
    <div className=" relative">
      <AudioPlayer />
      {isLetsGoButtonVisible && <LetsGoButton className="  z-[12]" />}
      <Landing className=" z-[12]" />
      <div className=" w-full h-dvh">
        <Canvas camera={{ position: [-50, 25, 10], far: 4000 }}>
          {/* <ambientLight /> */}
          <pointLight
            intensity={1000}
            color={"red"}
            position={[-100, 200, 100]}
          />
          <CameraControls makeDefault />
          {/* <ForestHouseModel /> */}
          <ModernGalleryV2Large />
        </Canvas>
      </div>
    </div>
  );
}
