import AnimatedPage from './AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cursor } from './App'

const Art = () => {
  return (
    <AnimatedPage>
      <div
        className="front-end"
        style={{
          position: 'absolute',

          top: '50%',
          left: '50%',
          fontSize: '5vw'
        }}>
        <Link className="options" to="/">
          2020
        </Link>
        <br />
        <br />
        <Link>2021</Link>
        <br />
        <br />
        <Link>2022</Link>
        <Cursor />
      </div>
    </AnimatedPage>
  )
}
export default Art
