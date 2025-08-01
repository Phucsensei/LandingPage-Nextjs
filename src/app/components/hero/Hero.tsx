import Image from 'next/image'
import './hero.scss'
import heroImage from '../../../assets/hero.png'
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
                    <motion.h2 variants={textVariants}>MAX I & US</motion.h2>
                    <motion.p variants={textVariants}>Maxius is the only self-developed semiconductor company that focuses on developing High-Performance Servers. We provide specialized solutions tailored towards different sectors of the IT industry and strive to break into the global market as a leader in server technology.</motion.p>
                    <motion.div className="buttons" variants={textVariants}>

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
                <Image src={heroImage} alt="hero" />
            </div>
        </div>
    )
}