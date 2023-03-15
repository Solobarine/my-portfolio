import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

const Computer = () => {
  const computer = useGLTF('./models/gaming_desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={.4} />
      <pointLight intensity={1} />
      <primitive
      object={computer.scene}
      rotation={[-0.01, -0.2, -0.1]}
      position={[0, -3.5, -1.5]}
      scale={1.5}
      />
    </mesh>
  )
}

const ComputerScene = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 30, 15], fov: 20}}
      gl={{preserveDrawingBuffer: true}}
  >
    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
      <Computer />
      <Preload />
    </Canvas>
  )
}

export default ComputerScene
