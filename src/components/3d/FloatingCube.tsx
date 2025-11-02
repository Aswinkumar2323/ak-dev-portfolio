import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { MeshDistortMaterial } from "@react-three/drei";
import { useIsMobile } from "../../hooks/use-mobile"; // ✅ import your hook

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  const isMobile = useIsMobile();
  const { size } = useThree();

  // ✅ Responsive scale — smaller on mobile
  const scale = isMobile ? 1.3 : 2.5;

  // ✅ Responsive position — move cube slightly back & lower on small screens
  const baseY = isMobile ? -0.2 : 0;
  const baseZ = isMobile ? -0.5 : 0;

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.position.y = baseY + Math.sin(t) * 0.25;
      meshRef.current.position.z = baseZ;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color="#00d4ff"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

export default FloatingCube;
