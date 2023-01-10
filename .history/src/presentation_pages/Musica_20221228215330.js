import pic1 from '../images/musica/pic1.png'
import pic2 from '../images/devclub/pic2.png'
import pic3 from '../images/devclub/pic3.png'
import pic4 from '../images/devclub/pic4.png'
import pic5 from '../images/devclub/pic5.png'
import pic6 from '../images/devclub/pic6.png'
import '../styling/library-styles.css'
import AnimatedPage from '../AnimatedPage'
import React, { useEffect } from 'react'

const Musica = () => {
  return (
    <div
      style={{
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        fontSize: '2vw',
        transform: 'translate(-50%, -50%)'
      }}>
      <h1>Musica content will be here</h1>
    </div>
  )
}
export default Musica
