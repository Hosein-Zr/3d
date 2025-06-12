"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ClientCameraController() {
  const { camera } = useThree();

  const yaw = useRef(0);
  const pitch = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const movement = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    camera.rotation.order = "YXZ";
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);

    // Universal key mapping
    const mapKey = (e: KeyboardEvent) => {
      // Always lowercase for comparison
      const key = e.key.toLowerCase();
      const code = e.code;

      // Debug: Uncomment next line to check what's coming in
      // console.log(`keydown/up code: ${code} | key: ${key}`);
      if (code === "ArrowUp" || code === "KeyW" || key === "w")
        return "forward";
      if (code === "ArrowDown" || code === "KeyS" || key === "s")
        return "backward";
      if (code === "ArrowLeft" || code === "KeyA" || key === "a") return "left";
      if (code === "ArrowRight" || code === "KeyD" || key === "d")
        return "right";
      return null;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const action = mapKey(e);
      if (action) {
        movement.current[action] = true;
        e.preventDefault();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      const action = mapKey(e);
      if (action) {
        movement.current[action] = false;
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp, { passive: false });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [camera]);

  useFrame((_, delta) => {
    const maxYaw = 2*Math.PI; // 180°
    const maxPitch = Math.PI * 0.475;
    const lerpFactor = 0.15;

    const targetYaw = -mouse.current.x * maxYaw;
    const targetPitch = THREE.MathUtils.clamp(
      mouse.current.y * 1.5,
      -maxPitch,
      maxPitch
    );

    yaw.current = THREE.MathUtils.lerp(yaw.current, targetYaw, lerpFactor);
    pitch.current = THREE.MathUtils.lerp(
      pitch.current,
      targetPitch,
      lerpFactor
    );
    camera.rotation.set(pitch.current, yaw.current, 0);

    // --- Movement
    const moveVector = new THREE.Vector3();
    const speed = 2; // units per second

    // --- Forward / Backward
    if (movement.current.forward || movement.current.backward) {
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      forward.y = 0; // stay level
      forward.normalize();
      if (movement.current.forward) moveVector.add(forward);
      if (movement.current.backward) moveVector.sub(forward);
    }

    // --- Strafe Left / Right
    if (movement.current.left || movement.current.right) {
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();
      // right = forward cross up
      const right = new THREE.Vector3();
      right.crossVectors(forward, camera.up).normalize();
      if (movement.current.right) moveVector.add(right);
      if (movement.current.left) moveVector.sub(right);
    }

    // --- Apply movement
    if (moveVector.lengthSq() > 0) {
      moveVector.normalize();
      camera.position.addScaledVector(moveVector, speed * delta);
    }
  });

  return null;
}
