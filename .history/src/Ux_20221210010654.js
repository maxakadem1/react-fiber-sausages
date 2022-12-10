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
          textAlign: 'center',
          transform: 'translate(-50%, -50%)'
        }}>
        <Link className="options" to="/Ux/musicanimals">
          MUSIC ANIMALS
        </Link>
        <br />
        <br />
        <Link className="options" to="/Ux/devclub">
          DEVCLUB
        </Link>
        <br />
        <br />
        <Link className="options" to="/Ux/musica">
          MUSICA
        </Link>
        {/* <img className="ux-image" src={require('./images/ux/Logo.png')} alt="ux pic 1" /> */}
      </div>
    </AnimatedPage>
  )
}

export default Ux
