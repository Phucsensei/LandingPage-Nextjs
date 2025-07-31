import { Variants, motion } from 'framer-motion'


export const Links = () => {
    const Variants: Variants = {
        open: { transition: { staggerChildren: 0.1 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
    }

    const itemVariants: Variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 50, opacity: 0 }
    }

    const items = [
        'HomePage',
        'Services',
        'About',
        'Contact',
        'Blog'
    ]
    return (
        <motion.div className="links" variants={Variants}>
            {items.map((item) => (
                <motion.a key={item} href={`#${item}`} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}