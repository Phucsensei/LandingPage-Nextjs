import Image from 'next/image'
import './about.scss'
import { motion, useInView } from 'framer-motion'
import uclCr7 from '@/assets/ucl king.jpg'
import juveImg from '@/assets/gal juve.jpg'
import rmImg from '@/assets/gal real.jpg'
import slImg from '@/assets/gal portugal.jpg'
import manUtdImg from '@/assets/gal manu.jpg'
import { useRef } from 'react'

export const About = () => {

    const ref = useRef(null)


    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div className="about" variants={variants} initial="initial" ref={ref} animate={'animate'}>

            <motion.div className='titleContainer' variants={variants}>
                <div className="title">
                    <Image src={uclCr7} alt="about" />
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>Unmatched </motion.b>Passion.
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>Legendary </motion.b>Journey.
                    </h1>

                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src={juveImg} alt="Juventus" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Juventus</h2>
                        <p>The Old Lady of Italian football, where CR7 continued his legacy with style and goals.</p>
                        <button>View History</button>
                    </div>
                </motion.div>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src={rmImg} alt="Real Madrid" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Real Madrid</h2>
                        <p>The greatest chapter of CR7 is career, winning 4 Champions League titles.</p>
                        <button>View History</button>
                    </div>
                </motion.div>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src={slImg} alt="Portugal" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Portugal</h2>
                        <p>Leading his nation to European glory in 2016 and continuing to break records.</p>
                        <button>View History</button>
                    </div>
                </motion.div>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src={manUtdImg} alt="Manchester United" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Manchester United</h2>
                        <p>Where the legend began, transforming from a talented youngster to a world-class star.</p>
                        <button>View History</button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}