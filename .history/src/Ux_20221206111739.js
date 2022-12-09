import AnimatedPage from './AnimatedPage'

const Ux = () => {
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
        <img className="ux-image" src={require('./images/ux/Logo.png')} alt="ux pic 1" />
        <img className="ux-image" src={require('./images/ux/Logo.png')} alt="ux pic 1" />
      </div>
    </AnimatedPage>
  )
}
export default Ux
