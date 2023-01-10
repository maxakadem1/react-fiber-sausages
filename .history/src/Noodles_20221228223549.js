/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useState, useMemo, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Fresnel, Noise } from 'lamina/vanilla'
import { useLocation, useHistory } from 'react-router-dom'

// const colorA = new THREE.Color('#2032A5').convertSRGBToLinear()
// const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
// const fresnel = new THREE.Color('#E7B473').convertSRGBToLinear()

const colorA = new THREE.Color('#2032A5').convertSRGBToLinear()
const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
const fresnel = new THREE.Color('#E7B473').convertSRGBToLinear()

// const material = new LayerMaterial({
//   layers: [
//     new Base({ color: colorA }),
//     new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
//     new Depth({ colorA: 'red', colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
//     new Fresnel({ mode: 'add', color: fresnel, intensity: 0.3, power: 2.5, bias: 0.0 }),
//     new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'red', mode: 'overlay' })
//   ]
// })

const material = new LayerMaterial({
  layers: [
    new Base({ color: colorA }),
    new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorA: 'red', colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: fresnel, intensity: 0.3, power: 2.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'red', mode: 'overlay' })
  ]
})

function Noodle() {
  const { viewport, camera } = useThree()
  const { nodes } = useGLTF('/worms-transformed.glb')
  const [geometry] = useState(() => nodes[`noodle_${Math.ceil(Math.random() * 4)}`].geometry)
  const [speed] = useState(() => 0.1 + Math.random() / 10)
  const position = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport])
  return (
    <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
      <mesh scale={5} geometry={geometry} material={material} />
    </Float>
  )
}

// export default function Noodles() {
//   return Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)
// }

export default function Noodles() {
  const { viewport, camera } = useThree()
  const noodles = Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)
  const location = useLocation()

  useEffect(() => {
    // Animate the 3D objects out of the screen when the route changes
    animateOut()

    // Listen for changes to the location and run the animation again
    return history.listen(() => animateOut())
  }, [])

  function animateOut() {
    // Get the current viewport dimensions
    const { width, height } = viewport.getCurrentViewport(camera)

    // Create a new animation for each 3D object
    noodles.forEach((noodle) => {
      const startPosition = noodle.props.position
      const endPosition = startPosition.clone().add(new THREE.Vector3(width, height, 0))
      let startTime

      function updatePosition(timestamp) {
        if (!startTime) startTime = timestamp
        const elapsedTime = timestamp - startTime
        const fraction = elapsedTime / 500 // animate over 500 milliseconds

        noodle.props.position = startPosition.clone().lerp(endPosition, fraction)
        if (fraction < 1) {
          requestAnimationFrame(updatePosition)
        }
      }

      requestAnimationFrame(updatePosition)
    })
  }

  return noodles
}
useGLTF.preload('/worm-transformed.glb')
