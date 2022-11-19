import React from 'react'
import {motion} from 'framer-motion'
import ANIMATIONS from './motion.config'

type MotionProps = {
    children: React.ReactNode | JSX.Element
    animation: string
    unique?: any
}

const Motion = ({
    children,
    animation,
    unique
}: MotionProps) => {
  return (
            <motion.div key={unique} {...ANIMATIONS[animation]}>
                {children}
            </motion.div>
  )
}

export default Motion