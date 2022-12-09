import './styles.css'
import AnimatedPage from './AnimatedPage'

const Front = () => {
  return (
    <AnimatedPage>
      <div
        className="front-end"
        style={{
          position: 'absolute',

          top: '50%',
          left: '50%',
          fontSize: '5vw',
          transform: 'translate(-50%, -50%)'
        }}>
        <h1>Frontend</h1>
      </div>
    </AnimatedPage>
  )
}
export default Front
