import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import App from './App'

import { Logo } from '@pmndrs/branding'

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

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, 0]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 14}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
    <Caption>{`HELLO\nI AM\nMAXIM\nABDULKHALIKOV`}</Caption>
  </>,
  document.getElementById('root')
)
