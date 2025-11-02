import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { MeshDistortMaterial } from "@react-three/drei";
import { useIsMobile } from "../../hooks/use-mobile";

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  const isMobile = useIsMobile();

  // Dynamic cube scale by viewport type
  const scale = isMobile ? 1.1 : 2.3;

  // Textured floating effect
  const baseY = isMobile ? -0.3 : 0;
  const baseZ = isMobile ? -0.6 : 0;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    meshRef.current.rotation.x = t * 0.35;
    meshRef.current.rotation.y = t * 0.45;
    meshRef.current.position.y = baseY + Math.sin(t * 1.4) * 0.22;
    meshRef.current.position.z = baseZ;
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color="#00d4ff"
        distort={isMobile ? 0.25 : 0.4}
        speed={2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export default FloatingCube;
