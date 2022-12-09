import AnimatedPage from './AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

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
        <Link>DEVCLUB</Link>
        <br />
        <br />
        <Link>MUSICA</Link>
        {/* <img className="ux-image" src={require('./images/ux/Logo.png')} alt="ux pic 1" /> */}
        <Cursor />
      </div>
    </AnimatedPage>
  )
}

export default Ux
