import React from 'react';
import styles from './footer.module.scss'
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <a href="https://github.com/codeanish" target="_blank" rel="noreferrer" aria-label="Github" className={styles.icon}><FaGithub/></a>
                <a href="https://twitter.com/codeanish" target="_blank" rel="noreferrer" aria-label="Twitter" className={styles.icon}><FaTwitter/></a>
                <a href="https://www.linkedin.com/in/codeanish/" target="_blank" aria-label="LinkedIn" rel="noreferrer" className={styles.icon}><FaLinkedin/></a>
            </div>
        </div>
    );
};

export default Footer;