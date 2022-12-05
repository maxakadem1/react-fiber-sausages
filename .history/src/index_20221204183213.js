import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import App from './App'
import { Canvas, useThree, useFrame } from '@react-three/fiber'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        my work
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>frontend</div>
      <div style={{ position: 'absolute', top: 55, left: 40, fontSize: '13px' }}>UI/UX design</div>
      <div style={{ position: 'absolute', top: 70, left: 40, fontSize: '13px' }}>digital art</div>
      <a href="" target={'_blank'} style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        resume
      </a>
      <a href="" target={'_blank'} style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
        contact
      </a>
    </div>
  )
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
  </>,
  document.getElementById('root')
)
