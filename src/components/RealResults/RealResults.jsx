import React from 'react';
import styles from './RealResults.module.css';
import portraitImg from '../../assets/portrait.png';

function RealResults() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Column: Text and Button */}
                <div className={styles.leftColumn}>
                    <h2 className={styles.heading}>
                        Real Businesses<br />
                        Real Results
                    </h2>
                    <p className={styles.paragraph}>
                        We build high-converting lead systems that bring you qualified leads every single day using ads, landing pages, and automation.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.ctaButton}>Learn More</button>
                        <button className={styles.iconButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Center Column: Portrait Image */}
                <div className={styles.centerColumn}>
                    <img
                        src={portraitImg}
                        alt="Monochrome Portrait"
                        className={styles.portrait}
                    />
                </div>

                {/* Right Column: Industry List */}
                <div className={styles.rightColumn}>
                    <div className={styles.listItem}>
                        <h3 className={styles.listHeading}>Software & Tech</h3>
                        <p className={styles.listText}>
                            We drive targeted SaaS leads with high-converting demo funnels.
                        </p>
                    </div>

                    <div className={styles.listItem}>
                        <h3 className={styles.listHeading}>E-Commerce & Retail</h3>
                        <p className={styles.listText}>
                            We convert visitors into buyers with optimized product funnels and ads.
                        </p>
                    </div>

                    <div className={styles.listItem}>
                        <h3 className={styles.listHeading}>Health & Wellness</h3>
                        <p className={styles.listText}>
                            We generate appointment-ready leads using local ads and booking funnels.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default RealResults;