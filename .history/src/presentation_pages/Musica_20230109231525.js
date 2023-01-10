import pic1 from '../images/musica/pic1.png'
import pic2 from '../images/musica/pic2.png'
import pic3 from '../images/musica/pic3.png'
import pic4 from '../images/musica/pic4.png'
import pic5 from '../images/musica/pic5.png'
import pic6 from '../images/musica/pic6.png'
import pic7 from '../images/musica/pic7.png'
import pic8 from '../images/musica/pic8.png'
import pic9 from '../images/musica/pic9.png'
import '../styling/library-styles.css'
import AnimatedPage from '../AnimatedPage'
import React, { useEffect } from 'react'

const Musica = () => {
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
            <img className="image-item" src={pic5} alt="img5" />
            <img className="image-item" src={pic6} alt="img6" />
            <img className="image-item" src={pic7} alt="img7" />
            <img className="image-item" src={pic8} alt="img8" />
            <img className="image-item" src={pic9} alt="img9" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
export default Musica
