import React from 'react'
import Logo from '../../assets/images/blog-logo.png'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src={Logo} alt="logo"/>
        </footer>
    )
}

export default Footer
