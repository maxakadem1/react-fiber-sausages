import pic1 from '../images/music-animals/pic1.png'
import pic2 from '../images/music-animals/pic2.png'
import pic3 from '../images/music-animals/pic3.png'
import pic4 from '../images/music-animals/pic4.png'
import pic5 from '../images/music-animals/pic5.png'
import pic6 from '../images/music-animals/pic6.png'
import pic7 from '../images/music-animals/pic7.png'
import pic8 from '../images/music-animals/pic8.png'
import pic9 from '../images/music-animals/pic9.png'
import '../library-styles.css'
import AnimatedPage from '../AnimatedPage'

const MusicAnimals = () => {
  return (
    <AnimatedPage>
      <div
        style={{
          transform: 'translate(-50%, -50%)'
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
    </AnimatedPage>
  )
}
export default MusicAnimals
