interface AnimationProps {
    [key: string]: {}
}

const ANIMATIONS: AnimationProps = {
    fadeIn: {
        initial: {
            x: '-100%',
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: "-100%",
            opacity: 0
        },
        transition: {
            duration: 0.5
        }
    }
}

export default ANIMATIONS