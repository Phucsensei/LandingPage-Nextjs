
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

export const Test = () => {

    // const [open, setOpen] = useState(false)

    const itemVariants: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            x: 100,
            transition: {
                delay: i * 0.3
            }
        })
    }

    const items = ['item1', 'item2', 'item3', 'item4']

    return (
        <div className="course">
            <motion.ul initial='hidden' animate='visible' variants={itemVariants}>
                {items.map((item, i) => (
                    <motion.li key={item} variants={itemVariants} custom={i}>{item}</motion.li>
                ))}
            </motion.ul>
        </div>
    )
}