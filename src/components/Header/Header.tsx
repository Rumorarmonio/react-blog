import React from 'react'
import Logo from '../../images/blog-logo.png'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="logo"/>
        </header>
    )
}

export default Header
