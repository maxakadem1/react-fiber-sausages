import '../styling//styles.css'
import AnimatedPage from '../AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
    <AnimatedPage>
      <div
        className="front-end"
        style={{
          position: 'absolute',
          textAlign: 'center',
          top: '50%',
          left: '50%',
          fontSize: '5vw',
          transform: 'translate(-50%, -50%)'
        }}>
        <Link className="options" to="/frontend/devclub">
          DEVCLUB
        </Link>
        <br />
        <br />
        <Link className="options" to="/frontend/gstat">
          GSTAT
        </Link>
        <br />
        <br />
        <Link className="options" to="/frontend/packetvis">
          PACKET VIS
        </Link>
      </div>
    </AnimatedPage>
  )
}
export default Front
