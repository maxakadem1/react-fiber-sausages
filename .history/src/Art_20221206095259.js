import AnimatedPage from './AnimatedPage'

const Art = () => {
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
        <h1>Art</h1>
      </div>
    </AnimatedPage>
  )
}
export default Art
