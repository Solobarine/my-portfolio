import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal, OrbitControls, Preload, useTexture, Float } from '@react-three/drei'

const Ball = (props) => {
  const [logo] = useTexture([props.imgUrl])
  return (
    <>
    <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
      <ambientLight intensity={1} />
      <directionalLight position={[0,0, 0.05]} />
      <mesh receiveShadow castShadow scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshLambertMaterial color="#33a" polygonOffset polygonOffsetFactor={-6} flatShading/>
        <Decal flatShading position={[0, 0, 1]} rotation={[2*Math.PI, 0, 6]} map={logo} />
      </mesh>
    </Float>
    </>
  )
}

const BallScene = (props) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
  >
      <Suspense fallback={false}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={props.imgUrl}/>
      </Suspense>
      <Preload/>
    </Canvas>
  )
}

export default BallScene
