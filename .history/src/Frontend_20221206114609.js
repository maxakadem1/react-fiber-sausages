import './styles.css'
import AnimatedPage from './AnimatedPage'
import { Suspense, useState } from 'react'

const Front = () => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  return (
    <AnimatedPage>
      <div
        className="front-end"
        style={{
          position: 'absolute',

          top: '50%',
          left: '50%',
          fontSize: '5vw',
          transform: 'translate(-50%, -50%)'
        }}>
        <h1>Frontend</h1>
      </div>
      <div
        className="cursor"
        style={{
          left: cursorX + 'px',
          top: cursorY + 'px'
        }}></div>
    </AnimatedPage>
  )
}
export default Front
