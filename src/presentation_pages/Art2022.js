import pic1 from '../images/art_2022/pic1.png'
import pic2 from '../images/art_2022/pic2.png'
import pic3 from '../images/art_2022/pic3.png'
import pic4 from '../images/art_2022/pic4.png'
import pic5 from '../images/art_2022/pic5.png'
import pic6 from '../images/art_2022/pic6.png'
import '../styling/library-styles.css'
import AnimatedPage from '../AnimatedPage'
import React, { useEffect } from 'react'

const Art2022 = () => {
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
            <img className="image-item" src={pic6} alt="img6" />
            <img className="image-item" src={pic1} alt="img1" />
            <img className="image-item" src={pic2} alt="img2" />
            <img className="image-item" src={pic3} alt="img3" />
            <img className="image-item" src={pic4} alt="img4" />
            <img className="image-item" src={pic5} alt="img5" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
export default Art2022
