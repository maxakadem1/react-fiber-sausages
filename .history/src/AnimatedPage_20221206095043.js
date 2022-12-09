import { motion } from 'framer-motion'

const animations = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
}

const AnimatedPage = ({ children }) => {
  return (
    <motion.div initial="initial" variants={animations}>
      {children}
    </motion.div>
  )
}
export default AnimatedPage
