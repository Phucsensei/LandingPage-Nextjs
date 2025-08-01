
import './navbar.scss'
import { motion } from 'framer-motion'
import { Sidebar } from '../layout/Sidebar/Sidebar'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>MAXIOS</motion.span>
                <div className="center-section">
                    <ul className="nav-links">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#HomePage">Home</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#About">About</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#Features">Features</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#Contact">Contact</Link>
                        </motion.li>
                    </ul>
                </div>


            </div>
        </div>

    )
}