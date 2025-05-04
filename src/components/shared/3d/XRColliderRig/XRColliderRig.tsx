import { useXR } from "@react-three/xr";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export function XRColliderRig() {
  const { player } = useXR();
  const bodyRef = useRef<any>();

  useFrame(() => {
    if (!player || !bodyRef.current) return;
    const pos = player.position;
    bodyRef.current.setNextKinematicTranslation({
      x: pos.x,
      y: pos.y,
      z: pos.z,
    });
  });

  return (
    <RigidBody
      ref={bodyRef}
      type="kinematicPosition"
      colliders="capsule"
      enabledRotations={[false, false, false]}
    >
      <mesh visible={false}>
        <capsuleGeometry args={[0.3, 1.0]} />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
  );
}
