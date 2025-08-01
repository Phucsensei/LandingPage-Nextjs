import { useRef } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'

export const Contact = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-100px' })

    const variants = {
        initial: {
            opacity: 0,
            y: 500
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView='animate' >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>phuctc6776@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Hello street Da Nang</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>0867167237</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.form initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ duration: 1, delay: 3 }} animate={isInView && { opacity: 1 }}>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <textarea rows={8} placeholder='Message' />
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}