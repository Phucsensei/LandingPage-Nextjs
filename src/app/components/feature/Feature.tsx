'use client'
import './feature.scss'
import { items } from '@/app/apis/mock-data'
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type FeatureItemProps = {
    item: {
        id: number;
        title: string;
        image: string;
        desc: string;
    };
}

const Single = ({ item }: FeatureItemProps) => {
    const ref = useRef(null)
    const [isExpanded, setIsExpanded] = useState(false)

    const isInView = useInView(ref, {
        margin: '-10% 0px -60% 0px',
        amount: 'some'
    })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-200%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    // 🧠 Reset khi section không còn hiển thị
    useEffect(() => {
        if (!isInView && isExpanded) {
            setIsExpanded(false)
        }
    }, [isInView, isExpanded])

    return (
        <section ref={ref}>
            <div className='container'>
                <div className="wrapper">
                    <motion.div
                        className="imageContainer"
                        style={{ opacity, scale }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={800}
                            height={500}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className='textContainer'
                        style={{ y }}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2>{item.title}</h2>
                        <div className="description">
                            <p className={isExpanded ? 'expanded' : ''}>
                                {item.desc}
                            </p>
                            <span className="see-more" onClick={toggleExpand}>
                                {isExpanded ? 'See less' : 'See more'}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Feature = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="feature" ref={ref}>
            <div className='progress'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Maxius Software Overview
                </motion.h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Feature