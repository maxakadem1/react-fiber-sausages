import * as THREE from 'three'
import { Suspense, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'
import Noodles from './Noodles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './styles.css'
import Frontend from './Frontend'
import Ux from './Ux'
import Art from './Art'
import AnimatedPage from './AnimatedPage'

export default function App() {
  const [caption, setText] = useState(`HELLO\nI AM\nMAXIM\nABDULKHALIKOV`)

  return (
    <Router>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
        <Bg />
        <Suspense fallback={null}>
          <Noodles />
          {/* <Caption>{caption}</Caption> */}
          <Rig />
        </Suspense>
      </Canvas>
      <Overlay />

      <Switch>
        <Route path="/frontend">
          <Frontend />
        </Route>
        <Route path="/ux">
          <Ux />
        </Route>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="/">
          <NameOverlay />
        </Route>
      </Switch>
    </Router>
  )
}

function Cursor() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div
      className="cursor"
      style={{
        left: cursorX + 'px',
        top: cursorY + 'px'
      }}></div>
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
    <mesh style={{ position: 'fixed' }} scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="black" colorA="black" alpha={1} mode="normal" near={130} far={300} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="gray" colorB="black" mode="subtract" alpha={0.15} />
      </LayerMaterial>
    </mesh>
  )
}

function NameOverlay() {
  return (
    <AnimatedPage>
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div
          className="myName"
          style={{
            position: 'absolute',

            top: '50%',
            left: '50%',
            fontSize: '5vw',
            transform: 'translate(-50%, -50%)'
          }}>
          HELLO <br /> I AM <br /> MAXIM <br /> ABDULKHALIKOV
          <div style={{ fontSize: '2.5vw', lineHeight: '1.2', fontWeight: '300' }}>
            I’m a graphic designer <br /> UX/UI designer <br />
            front-end web developer
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

function Overlay() {
  const [helloText, setText] = useState('HELLO')

  const handleClick = () => {
    console.log('click')
    setText('test')
  }
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <AnimatedPage>
      <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <Link to="/frontend" style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
          frontend
        </Link>
        <Link to="/Ux" style={{ position: 'absolute', top: 60, left: 40, fontSize: '13px' }}>
          UI/UX design
        </Link>
        <Link to="/Art" style={{ position: 'absolute', top: 80, left: 40, fontSize: '13px' }}>
          digital art
        </Link>
        <a
          href="https://drive.google.com/file/d/1VA9ZQAeKW2E_S-GShYx-wdYNhFdHFX1s/view?usp=sharing"
          target={'_blank'}
          style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
          resume
        </a>
        <Link to="/" style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
          home
        </Link>
        <a
          href="https://www.linkedin.com/in/abdulkhalikov/"
          target={'_blank'}
          style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
          linkedin
        </a>
        <a href="https://github.com/maxakadem1" target={'_blank'} style={{ position: 'absolute', top: 60, right: 40, fontSize: '13px' }}>
          github
        </a>
        <a
          href="https://www.instagram.com/max_navern/"
          target={'_blank'}
          style={{ position: 'absolute', top: 80, right: 40, fontSize: '13px' }}>
          instagram
        </a>
        {/* <div
          className="cursor"
          style={{
            left: cursorX + 'px',
            top: cursorY + 'px'
          }}></div> */}
      </div>
    </AnimatedPage>
  )
}
