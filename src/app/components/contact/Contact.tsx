'use client'
import { useRef } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { Footer } from '@/app/footer/Footer'

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

export const Contact = () => {
    const ref = useRef(null)
    const formRef = useRef(null)
    const isInView = useInView(ref, { margin: '-100px' })

    // Send email
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!formRef.current) return

        emailjs
            .sendForm('service_dvcli8c', 'template_u6k962h', formRef.current, {
                publicKey: '_42KJqPADWeETBOI5'
            })
            .then(
                () => {
                    toast.success('Message sent successfully!')
                },
                (error) => {
                    console.error('EmailJS Error:', error)
                    toast.error('Something went wrong!')
                }
            )
    }

    return (
        <>
            <motion.div className='contact' variants={variants} initial="initial" whileInView='animate' >
                <motion.div className="textContainer" variants={variants}>
                    <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
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
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <input required type="text" placeholder='Name' name='name' />
                        <input required type="email" placeholder='Email' name='email' />
                        <textarea required rows={8} placeholder='Message' name='message' />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}