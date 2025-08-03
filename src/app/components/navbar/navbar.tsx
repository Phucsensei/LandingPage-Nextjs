'use client'
import './navbar.scss'
import { motion } from 'framer-motion'
import { Sidebar } from '../layout/Sidebar/Sidebar'
import { useScrollToSection } from '@/app/hooks/useScrollToSection'

export const Navbar = () => {
    const scrollToSection = useScrollToSection()

    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    MAXIOS
                </motion.span>
                <div className="center-section">
                    <ul className="nav-links">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('HomePage')}
                            style={{ cursor: 'pointer' }}
                        >
                            Home
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('About')}
                            style={{ cursor: 'pointer' }}
                        >
                            About
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('Features')}
                            style={{ cursor: 'pointer' }}
                        >
                            Features
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('Contact')}
                            style={{ cursor: 'pointer' }}
                        >
                            Contact
                        </motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}