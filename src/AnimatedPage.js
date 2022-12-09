import { motion } from 'framer-motion'

const animations = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
}

const AnimatedPage = ({ children }) => {
  return (
    <motion.div initial="initial" variants={animations} animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}
export default AnimatedPage
