import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'

const Earth = () => {
  // const earth = useGLTF('./models/earth/scene.gltf')
  const earth = useGLTF(`./models/earth/scene.gltf`)


  return (
    <primitive 
    object={earth.scene}
    sizeAttentuation 
    scale={.5}
    position-y={0}
    rotation-y={0}
    />
  )
}


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{fov: 20, far: 200}}
  >
      <ambientLight />
      <pointLight position={[0,0,1]}/>
    <Suspense />
    <OrbitControls
      autoRotate={true}
      enableZoom={false}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 2} />
    <Earth />
    <Preload />
   </Canvas>
  )
}

export default EarthCanvas
