import React from 'react'
import Logo from '../images/blog-logo.png'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="logo"/>
        </header>
    )
}

export default Header
