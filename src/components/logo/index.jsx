import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/3iFkr-Dbo4QcgcIb/scene.splinecode"
  );

  const [angle, setAngle] = useState(0);

  useFrame(() => {
    setAngle((prev) => prev + 0.02); // speed of the wiggle
  });

  const wiggleAmplitude = 0.1; // extent of the wiggle
  const wiggleRotation = Math.sin(angle) * wiggleAmplitude;

  return (
    <>
      <group {...props} dispose={null}>
        <scene name="Scene">
          <mesh
            name="Text"
            geometry={nodes.Text.geometry}
            material={materials["Text Material"]}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            rotation={[0, wiggleRotation, 0]}
          />

          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
            zoom={0.4}
            position={[1.5, 0.5, 5.96]}
          />
          <directionalLight
            name="Default Light"
            color="#ffffff"
            intensity={4}
            position={[0, 10, 140]}
          />
        </scene>
      </group>
    </>
  );
}

export default function HuLogo() {
  return (
    <Suspense fallback={null}>
      <Canvas flat linear>
        <Scene />
        <OrbitControls
          enablePan={false}
          enableRotate={true}
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          rotateSpeed={0.1}
        />
      </Canvas>
    </Suspense>
  );
}
