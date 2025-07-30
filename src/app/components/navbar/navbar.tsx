import Image from 'next/image'
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import dribbble from '@/assets/dribbble.png'
import youtube from '@/assets/youtube.png'
import './navbar.scss'
import { motion } from 'framer-motion'
import { Sidebar } from '../layout/Sidebar/Sidebar'

export const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>ChiphucDev</motion.span>
                <div className="social-icons">
                    <a href="">
                        <Image
                            src={facebook}
                            alt="Landscape picture"
                        />
                    </a>

                    <a href="">
                        <Image
                            src={instagram}
                            alt="Landscape picture"
                        />
                    </a>
                    <a href="">
                        <Image
                            src={dribbble}
                            alt="Landscape picture"
                        />
                    </a>
                    <a href="">
                        <Image
                            src={youtube}
                            alt="Landscape picture"
                        />
                    </a>


                </div>
            </div>
        </div >
    )
}