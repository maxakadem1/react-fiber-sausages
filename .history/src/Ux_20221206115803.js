import AnimatedPage from './AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Ux = () => {
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
        <Link className="link" to="/">
          MUSIC ANIMALS
        </Link>
        <br />
        <br />
        <Link>SOMETHING 2</Link>
        <br />
        <br />
        <Link>SOMETHING 3</Link>
        {/* <img className="ux-image" src={require('./images/ux/Logo.png')} alt="ux pic 1" /> */}
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
export default Ux
