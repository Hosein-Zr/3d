"use client";
import Landing from "@/components/app/HomePage/Landing";
import LetsGoButton from "@/components/app/HomePage/LetsGoButton";
import { ForestHouseModel } from "@/components/shared/3d/ForestHouse/ForesthouseHouseModel";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAnimationStore } from "../../store/zustandStore";

export default function Home() {
  const { isLetsGoButtonVisible } = useAnimationStore();
  return (
    <div className=" relative">
      {isLetsGoButtonVisible && <LetsGoButton className="  z-[12]" />}
      <Landing className=" z-[12]" />
      <div className=" w-full h-dvh">
        <Canvas camera={{ position: [-1000, 500, 200], far: 4000 }}>
          {/* <ambientLight /> */}
          <pointLight intensity={1000} color={"red"} position={[-800,200 ,100]} />
          <CameraControls makeDefault />
          <ForestHouseModel />  
        </Canvas>
      </div>
    </div>
  );
}
