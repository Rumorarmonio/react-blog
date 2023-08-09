import React from 'react'
import Logo from '../../assets/images/blog-logo.png'
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'

function Header(props: any) {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="logo"/>
            <div className={styles.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header
