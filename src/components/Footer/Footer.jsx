import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerSection}>
            {/* The giant text is now in normal flow, acting as a header */}
            <div className={styles.giantBackgroundText}>Leadify</div>

            <div className={styles.contentContainer}>
                {/* Left: Heading and Socials */}
                <div className={styles.brandColumn}>
                    <h2 className={styles.footerHeading}>Consistent Leads<br />That Convert</h2>
                    <div className={styles.socialIcons}>
                        {/* Instagram */}
                        <a href="#" className={styles.icon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className={styles.icon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                        {/* X / Twitter */}
                        <a href="#" className={styles.icon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className={styles.icon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Middle: Links */}
                <div className={styles.linksColumn}>
                    <ul className={styles.linkList}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>

                {/* Right: Feature Image Card */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageCard}>
                        {/* Replace the background color in CSS with your actual image URL */}
                        <span className={styles.cardTopText}>Free Resources</span>
                        <a href="#" className={styles.cardBottomText}>
                            <span className={styles.arrow}>↗</span> EXPLORE NOW
                        </a>
                    </div>
                </div>
            </div>

            {/* Very Bottom Strip */}
            <div className={styles.bottomStrip}>
                <p>Privacy Policy</p>
                <p>© 2026 Leadify. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;