import AnimatedPage from './AnimatedPage'

const Ux = () => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
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
      </div>
    </AnimatedPage>
  )
}
export default Ux
