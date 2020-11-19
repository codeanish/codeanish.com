import React from 'react'
import "../styles/global.scss"
import Nav from './nav'
import styles from './layout.module.scss'
import Footer from './footer'

const Layout = ({children}) =>{

    return(
        <div className={styles.container}>
            <Nav/>
            <div className={styles.contentWrapper}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;