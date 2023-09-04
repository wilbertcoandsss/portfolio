import { motion } from "framer-motion";
import styles from "../styles/light.module.scss"

const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;