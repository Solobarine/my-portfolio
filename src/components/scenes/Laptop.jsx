import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'

const Laptop = () => {
  const laptop = useGLTF('./models/cyberpunk_laptop/scene.gltf')

  return (
    <primitive 
    object={laptop.scene}
    scale={2}
    position-y={-2}
    rotation-y={0}
    />
  )
}


const LaptopCanvas = () => {
  return (
    <div className="laptop">
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{fov: 45, far: 1000}}
  >
    <ambientLight />
    <Suspense />
    <OrbitControls
      autoRotate={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 2} />
     <Laptop />
   </Canvas>
   </div>
  )
}

export default LaptopCanvas
