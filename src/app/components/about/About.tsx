'use client'
import Image from 'next/image'
import './about.scss'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
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
                    <Image src='/people.webp' alt="about" width={100} height={100} />
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>Cutting-Edge </motion.b>Tech.
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>Real-World </motion.b>Impact.
                    </h1>
                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src="/teamwork.jpg" alt="Juventus" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Team Collaboration</h2>
                        <p>The Old Lady of Italian football, where CR7 continued his legacy with style and goals.</p>
                    </div>
                </motion.div>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src="/AI.jpg" alt="Real Madrid" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>AI Analytics</h2>
                        <p>The greatest chapter of CR7 is career, winning 4 Champions League titles.</p>
                    </div>
                </motion.div>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src="/IT.jpg" alt="Portugal" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Code Development</h2>
                        <p>Leading his nation to European glory in 2016 and continuing to break records.</p>
                    </div>
                </motion.div>
                <motion.div className="box">
                    <div className="imageContainer">
                        <Image src="/technology.jpg" alt="Manchester United" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="content">
                        <h2>Cloud Solutions</h2>
                        <p>Where the legend began, transforming from a talented youngster to a world-class star.</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About