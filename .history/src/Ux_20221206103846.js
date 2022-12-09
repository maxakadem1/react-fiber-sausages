import AnimatedPage from './AnimatedPage'

const Ux = () => {
  return (
    <AnimatedPage>
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div
          className="front-end"
          style={{
            position: 'absolute',

            top: '50%',
            left: '50%',
            fontSize: '5vw',
            transform: 'translate(-50%, -50%)'
          }}>
          <img className="ux-image" src={require('./images/ux/Logo.png')} alt="ux pic 1" />
        </div>
      </div>
    </AnimatedPage>
  )
}
export default Ux
