"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function KeyboardCameraController() {
  const { camera } = useThree();
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const direction = new THREE.Vector3();
  const moveSpeed = 1.5;
  const rotationSpeed = 2; // radians per second

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressed.current[event.key.toLowerCase()] = true;
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      keysPressed.current[event.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    // Rotate camera heading (Y-axis only)
    if (keysPressed.current["a"]) {
      camera.rotation.y += rotationSpeed * delta;
    }
    if (keysPressed.current["d"]) {
      camera.rotation.y -= rotationSpeed * delta;
    }

    // Forward/backward on XZ plane
    direction.set(0, 0, 0);
    const yaw = camera.rotation.y;
    const forward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));

    if (keysPressed.current["s"]) {
      direction.add(forward);
    }
    if (keysPressed.current["w"]) {
      direction.sub(forward);
    }

    direction.normalize().multiplyScalar(moveSpeed * delta);
    camera.position.add(direction);

    // Lock camera's pitch and roll to zero (only allow yaw)
    camera.rotation.x = 0;
    camera.rotation.z = 0;
  });

  return null;
}
