import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import './styles.css'
import App from './App'
import { caption } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="javascript:void(0)" onClick={showFrontend()} style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        frontend
      </a>
      <a style={{ position: 'absolute', top: 60, left: 40, fontSize: '13px' }}>UI/UX design</a>
      <a style={{ position: 'absolute', top: 80, left: 40, fontSize: '13px' }}>digital art</a>
      <a
        href="https://drive.google.com/file/d/1VA9ZQAeKW2E_S-GShYx-wdYNhFdHFX1s/view?usp=sharing"
        target={'_blank'}
        style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        {caption}
      </a>
      <a href="" style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        home
      </a>
      <a
        href="https://www.linkedin.com/in/abdulkhalikov/"
        target={'_blank'}
        style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
        linkedin
      </a>
      <a href="https://github.com/maxakadem1" target={'_blank'} style={{ position: 'absolute', top: 60, right: 40, fontSize: '13px' }}>
        github
      </a>
      <a
        href="https://www.instagram.com/max_navern/"
        target={'_blank'}
        style={{ position: 'absolute', top: 80, right: 40, fontSize: '13px' }}>
        instagram
      </a>
    </div>
  )
}

function showFrontend() {}

ReactDOM.render(
  <>
    <App />
    <Overlay />
  </>,
  document.getElementById('root')
)
