import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Star() {
  const meshRef = useRef(null);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(8));

  const originalPosition = useRef(new THREE.Vector3(x, y, z));

  const [velocityX, velocityY] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(0.002));

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += velocityX;
      meshRef.current.position.y += velocityY;

      const distance = meshRef.current.position.distanceTo(
        originalPosition.current
      );

      // When a star goes too far from its original spot, pull it back
      if (distance > 10) {
        meshRef.current.position.set(x, y, z);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <sphereGeometry args={[0.01, 64, 64]} />
      <meshBasicMaterial color={0xa540cb} />
    </mesh>
  );
}

export default function Stars({ count = 100 }) {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <Star key={i} />
        ))}
    </>
  );
}
