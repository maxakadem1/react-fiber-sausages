import AnimatedPage from '../AnimatedPage'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cursor } from './App'
import { motion } from 'framer-motion'

const Art = () => {
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
        <Link className="options" to="/Art/2020">
          2020
        </Link>
        <br />
        <br />
        <Link className="options" to="/Art/2021">
          2021
        </Link>
        <br />
        <br />
        <Link className="options" to="/Art/2022">
          2022
        </Link>
      </div>
    </AnimatedPage>
  )
}
export default Art
