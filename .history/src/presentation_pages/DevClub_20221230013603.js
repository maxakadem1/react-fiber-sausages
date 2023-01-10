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

const DevClub = () => {
  const location = useLocation()
  let locationCheck = ''

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0)

    if (location.pathname === '/frontend/devclub') {
      locationCheck = 'im in devclub'
      console.log(locationCheck)
    }
  }, []) // This empty array ensures that the effect only runs once, when the component is mounted
  return (
    <AnimatedPage>
      <div>
        <div
          className="image-gallery-devclub"
          style={{
            position: 'absolute',
            textAlign: 'center',
            top: '0',
            left: '50%',
            fontSize: '2vw',
            transform: 'translate(-50%, 0)'
          }}>
          <div className="image-library" style={{ overflow: 'scroll', scrollBehavior: 'smooth' }}>
            <img className="image-item" src={pic1} alt="img1" />
            <img className="image-item" src={pic2} alt="img2" />
            <img className="image-item" src={pic3} alt="img3" />
            <img className="image-item" src={pic4} alt="img4" />
            <img className="image-item" src={pic5} alt="img5" />
            <img className="image-item" src={pic6} alt="img6" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
export default DevClub
