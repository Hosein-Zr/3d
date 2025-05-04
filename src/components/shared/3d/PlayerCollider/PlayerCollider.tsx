// components/PlayerCollider.tsx
"use client";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function PlayerCollider() {
  const ref = useRef<any>();
  useFrame(() => {
    if (!ref.current) return;
    // Optional: apply user input for movement here
    // ref.current.setLinvel({ x: 0, y: 0, z: -1 }, true);
  });

  return (
    <RigidBody
      ref={ref}
      colliders="capsule"
      position={[0, 1, 0]}
      type="dynamic"
      mass={1}
      enabledRotations={[false, false, false]}
    >
      <mesh visible={false}>
        <capsuleGeometry args={[0.3, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
}
