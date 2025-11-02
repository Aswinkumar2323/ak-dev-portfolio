import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import FloatingCube from "./FloatingCube";
import { useIsMobile } from "../../hooks/use-mobile";

const Scene3D = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="w-full h-[350px] md:h-[650px]" // ✅ proper responsive height
      style={{ touchAction: "pan-y" }} // ✅ allows natural page scroll on mobile
    >
      <Canvas
        dpr={[1, 2]} // ✅ optimize retina display performance
        gl={{ antialias: true }}
      >
        {/* Camera — pulls back more on small screens */}
        <PerspectiveCamera
          makeDefault
          position={isMobile ? [0, 0, 7] : [0, 0, 5]}
        />

        {/* Controls - smooth, limited rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          enableDamping
          dampingFactor={0.08}
        />

        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />

        <Suspense fallback={null}>
          <FloatingCube />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
