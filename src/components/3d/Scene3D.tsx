import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import FloatingCube from "./FloatingCube";
import { useIsMobile } from "../../hooks/use-mobile";

const Scene3D = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={isMobile ? [0, 0, 6.5] : [0, 0, 5]} // ✅ further back on mobile
        />
        <OrbitControls enableZoom={false} enablePan={false} />
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <FloatingCube />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
