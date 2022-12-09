import AnimatedPage from './AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Cursor from './App'

const Ux = () => {
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
    </AnimatedPage>
  )
}
export default Ux
