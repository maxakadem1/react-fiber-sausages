import * as THREE from 'three'
import { Suspense, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'
import Noodles from './Noodles'

export default function App() {
  const [caption, setText] = useState(`HELLO\nI AM\nMAXIM\nABDULKHALIKOV`)

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
        <Noodles />
        <Caption>{caption}</Caption>
        <Rig />
      </Suspense>
    </Canvas>
  )
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text position={[0, 0, 0]} lineHeight={0.8} fontSize={width / 14} material-toneMapped={false} anchorX="center" anchorY="middle">
      {children}
    </Text>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="black" colorA="black" alpha={1} mode="normal" near={130} far={300} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="gray" colorB="black" mode="subtract" alpha={0.3} />
      </LayerMaterial>
    </mesh>
  )
}
