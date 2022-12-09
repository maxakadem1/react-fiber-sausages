import './styles.css'
import AnimatedPage from './AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
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
          DEVCLUB
        </Link>
        <br />
        <br />
        <Link>GSTAT</Link>
        <br />
        <br />
        <Link>MUSICA</Link>
      </div>
    </AnimatedPage>
  )
}
export default Front
