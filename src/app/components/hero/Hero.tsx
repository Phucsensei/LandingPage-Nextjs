import Image from 'next/image'
import './hero.scss'
import cr7 from '../../../assets/cr7.png'
import scroll from '../../../assets/scroll.png'
import { Variants, motion } from 'framer-motion'


export const Hero = () => {

    const textVariants: Variants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },
        scrollButton: {

            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (
        <div className="hero">
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Cristiano Ronaldo</motion.h2>
                    <motion.h1 variants={textVariants}>Fast. Focused. Fearless — like CR7.</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See his legendary moments</motion.button>
                        <motion.button variants={textVariants}>Contact me</motion.button>
                    </motion.div>
                    <motion.div variants={textVariants} animate="scrollButton">
                        <Image src={scroll} alt="scroll" />
                    </motion.div>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                Writer Content Creator Influencer
            </div>
            <div className="imageContainer">
                <Image src={cr7} alt="cr7" />
            </div>
        </div>
    )
}