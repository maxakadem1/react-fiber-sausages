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
        <img src="/src/images/ux/Logo.png" alt="oops" />
      </div>
    </AnimatedPage>
  )
}
export default Ux
