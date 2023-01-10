import pic1 from '../images/music-animals/pic1.png'
import pic2 from '../images/music-animals/pic2.png'
import pic3 from '../images/music-animals/pic3.png'
import pic4 from '../images/music-animals/pic4.png'

import '../styling/library-styles.css'
import AnimatedPage from '../AnimatedPage'
import React, { useEffect } from 'react'

const MusicAnimals = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0)
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
          <div className="image-library" style={{ overflow: 'scroll', scrollBehavior: 'smooth' }}>
            <img className="image-item" src={pic1} alt="img1" />
            <img className="image-item" src={pic2} alt="img2" />
            <img className="image-item" src={pic3} alt="img3" />
            <img className="image-item" src={pic4} alt="img4" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
export default MusicAnimals
