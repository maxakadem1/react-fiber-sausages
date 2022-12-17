import pic1 from '../images/music-animals/pic1.jpg'

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
      <img src={pic1} alt="rip pic1" />
    </div>
  )
}
export default MusicAnimals
