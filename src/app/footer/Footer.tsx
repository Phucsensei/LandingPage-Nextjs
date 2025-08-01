'use client'
import Image from 'next/image'
import Link from 'next/link'
import './footer.scss'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h2>MAXIUS</h2>
                        <p>Transforming ideas into digital reality. We create innovative solutions that drive business success.</p>
                        <div className="social-links">
                            <Link href="https://facebook.com" target="_blank">
                                <Image src="/social-insta.svg" alt="Instagram" width={24} height={24} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank">
                                <Image src="/social-linkedin.svg" alt="LinkedIn" width={24} height={24} />
                            </Link>
                            <Link href="https://youtube.com" target="_blank">
                                <Image src="/social-youtube.svg" alt="YouTube" width={24} height={24} />
                            </Link>
                            <Link href="https://x.com" target="_blank">
                                <Image src="/social-x.svg" alt="X" width={24} height={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="#HomePage">Home</Link></li>
                            <li><Link href="#About">About Us</Link></li>
                            <li><Link href="#Features">Features</Link></li>
                            <li><Link href="#Contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="footer-services">
                        <h3>Services</h3>
                        <ul>
                            <li>Web Development</li>
                            <li>Mobile Apps</li>
                            <li>UI/UX Design</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Image src="/phone-calling-svgrepo-com.svg" alt="Phone" width={20} height={20} />
                                <span>+84 123 456 789</span>
                            </div>
                            <div className="contact-item">
                                <Image src="/file.svg" alt="Email" width={20} height={20} />
                                <span>contact@maxius.com</span>
                            </div>
                            <div className="contact-item">
                                <Image src="/globe.svg" alt="Location" width={20} height={20} />
                                <span>Ho Chi Minh City, Vietnam</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} Maxius. All rights reserved.</p>
                    </div>
                    <div className="footer-links-bottom">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}