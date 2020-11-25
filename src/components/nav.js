import React from 'react';
import {Link} from 'gatsby';
import styles from './nav.module.scss'


const Nav = () => {

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">CodeAnish</Link>
            </div>
            <ol className={styles.navLinks}>
                <Link to="/blog"><li>Writing</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/about"><li>About</li></Link>         
            </ol>
        </nav>
    );
};

export default Nav;