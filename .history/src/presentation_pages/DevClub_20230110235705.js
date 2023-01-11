import pic1 from '../images/devclub/pic1.png'
import pic2 from '../images/devclub/pic2.png'
import pic3 from '../images/devclub/pic3.png'
import pic4 from '../images/devclub/pic4.png'
import pic5 from '../images/devclub/pic5.png'
import pic6 from '../images/devclub/pic6.png'
import '../styling/library-styles.css'
import AnimatedPage from '../AnimatedPage'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { useEffect } from 'react'

export let locationCheck = false

const DevClub = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0)

    const a1Ref = useRef()

    const aElements = [
      {
        ref: a1Ref,
        handleMouseEnter: () => {
          document.querySelector('.cursor').classList.add('cursor--hover')
        },
        handleMouseLeave: () => {
          document.querySelector('.cursor').classList.remove('cursor--hover')
        }
      }
    ]

    useEffect(() => {
      aElements.forEach(({ ref, handleMouseEnter, handleMouseLeave }) => {
        ref.current.addEventListener('mouseenter', handleMouseEnter)
        ref.current.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          ref.current.removeEventListener('mouseenter', handleMouseEnter)
          ref.current.removeEventListener('mouseleave', handleMouseLeave)
        }
      })
    }, [])

    if (location.pathname === '/frontend/devclub') {
      locationCheck = true
    }
  }, []) // This empty array ensures that the effect only runs once, when the component is mounted
  return (
    <AnimatedPage>
      <div>
        <div
          className="image-gallery"
          style={{
            position: 'absolute',
            textAlign: 'center',
            top: '0',
            left: '50%',
            fontSize: '2vw',
            transform: 'translate(-50%, 0)'
          }}>
          <div className="image-library" style={{ overflow: 'hidden', scrollBehavior: 'smooth' }}>
            <img className="image-item" src={pic1} alt="img1" style={{ filter: 'brightness(80%)' }} />
            <img className="image-item" src={pic2} alt="img2" style={{ filter: 'brightness(80%)' }} />
            <img className="image-item" src={pic3} alt="img3" style={{ filter: 'brightness(80%)' }} />
            <img className="image-item" src={pic4} alt="img4" style={{ filter: 'brightness(80%)' }} />
            <img className="image-item" src={pic5} alt="img5" style={{ filter: 'brightness(80%)' }} />
            <img className="image-item" src={pic6} alt="img6" style={{ filter: 'brightness(80%)' }} />
            <a ref={a1Ref} target={'_blank'} style={{ fontSize: '13px' }} href="https://devclub.ca/">
              link
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
export default DevClub
