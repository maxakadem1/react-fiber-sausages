import * as THREE from 'three'
import { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'
import Noodles from './Noodles'
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom'
import './styles.css'
import Frontend from './Frontend'
import Ux from './Ux'
import Art from './Art'
import AnimatedPage from './AnimatedPage'
import DevClub from './presentation_pages/DevClub'
import GStat from './presentation_pages/GStat'
import PacketVis from './presentation_pages/PacketVis'
import MusicAnimals from './presentation_pages/MusicAnimals'
import Musica from './presentation_pages/Musica'
import Art2020 from './presentation_pages/Art2020'
import Art2021 from './presentation_pages/Art2021'
import Art2022 from './presentation_pages/Art2022'

export default function App() {
  const [caption, setText] = useState(`HELLO\nI AM\nMAXIM\nABDULKHALIKOV`)

  return (
    <Router>
      <Cursor />
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
          <Switch>
            <Route path="/frontend/devclub">
              <DevClub />
            </Route>
            <Route path="/frontend/gstat">
              <GStat />
            </Route>
            <Route path="/frontend/packetvis">
              <PacketVis />
            </Route>
            <Route path="/frontend/">
              <Frontend />
            </Route>
          </Switch>
        </Route>

        <Route path="/ux">
          <Switch>
            <Route path="/ux/musicanimals">
              <MusicAnimals />
            </Route>
            <Route path="/ux/musica">
              <Musica />
            </Route>
            <Route path="/ux/devclub">
              <DevClub />
            </Route>
            <Route path="/ux/">
              <Ux />
            </Route>
          </Switch>
        </Route>

        <Route path="/art">
          <Switch>
            <Route path="/art/2020">
              <Art2020 />
            </Route>
            <Route path="/art/2021">
              <Art2021 />
            </Route>
            <Route path="/art/2022">
              <Art2022 />
            </Route>
            <Route path="/art/">
              <Art />
            </Route>
          </Switch>
        </Route>

        <Route path="/">
          <NameOverlay />
        </Route>
      </Switch>
    </Router>
  )
}

function Cursor() {
  const location = useLocation()

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
  //hover effect for elements
  const aRef = useRef()
  useEffect(() => {
    const handleMouseEnter = () => {
      console.log('enter')
      document.querySelector('.cursor').classList.add('cursor--hover')
    }
    const handleMouseLeave = () => {
      document.querySelector('.cursor').classList.remove('cursor--hover')
    }
    aRef.current.addEventListener('mouseenter', handleMouseEnter)
    aRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      aRef.current.removeEventListener('mouseenter', handleMouseEnter)
      aRef.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <AnimatedPage>
      <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <Link ref={aRef} to="/frontend" style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
          frontend
        </Link>
        <Link ref={aRef} to="/Ux" style={{ position: 'absolute', top: 60, left: 40, fontSize: '13px' }}>
          UI/UX design
        </Link>
        <Link ref={aRef} to="/Art" style={{ position: 'absolute', top: 80, left: 40, fontSize: '13px' }}>
          digital art
        </Link>
        <a
          ref={aRef}
          href="https://drive.google.com/file/d/1VA9ZQAeKW2E_S-GShYx-wdYNhFdHFX1s/view?usp=sharing"
          target={'_blank'}
          style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
          resume
        </a>
        <Link ref={aRef} to="/" style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
          home
        </Link>
        <a
          ref={aRef}
          href="https://www.linkedin.com/in/abdulkhalikov/"
          target={'_blank'}
          style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
          linkedin
        </a>
        <a
          ref={aRef}
          href="https://github.com/maxakadem1"
          target={'_blank'}
          style={{ position: 'absolute', top: 60, right: 40, fontSize: '13px' }}>
          github
        </a>
        <a
          ref={aRef}
          href="https://www.instagram.com/max_navern/"
          target={'_blank'}
          style={{ position: 'absolute', top: 80, right: 40, fontSize: '13px' }}>
          instagram
        </a>
      </div>
    </AnimatedPage>
  )
}

export { Cursor }
