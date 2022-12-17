import pic1 from '../images/music-animals/pic1.png'
import pic2 from '../images/music-animals/pic2.png'
import pic3 from '../images/music-animals/pic3.png'
import pic4 from '../images/music-animals/pic4.png'
import pic5 from '../images/music-animals/pic5.png'
import pic6 from '../images/music-animals/pic6.png'
import pic7 from '../images/music-animals/pic7.png'
import pic8 from '../images/music-animals/pic8.png'
import pic9 from '../images/music-animals/pic9.png'

const MusicAnimals = () => {
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
      <h1>MusicAnimals content will be here</h1>
      <div className="image-library">
        <img className="image-item" src={pic1} alt="img1" />
      </div>
    </div>
  )
}
export default MusicAnimals
