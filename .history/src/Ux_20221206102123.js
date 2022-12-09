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
        <img src="./images/ux/Logo.png" alt="" />
      </div>
    </AnimatedPage>
  )
}
export default Ux
