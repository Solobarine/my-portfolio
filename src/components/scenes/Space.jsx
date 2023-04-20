import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload} from "@react-three/drei"
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(10000), {radius: 1.2})

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30
    ref.current.rotation.y -= delta / 50
  })

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
        <PointMaterial
        transparent
        color="#ddd"
        size={.007}
        sizeAttentuation={true}
        depthWrite={true}
      />
      </Points>
    </group>
  )

}

const Space = () => {
  return (
    <div className="space">
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default Space
