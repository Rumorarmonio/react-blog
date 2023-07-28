import React from 'react'

function Navbar() {
    return (
        <section className="sidebar">
            <nav className="sidebar__navigation">
                <ul className="sidebar__links">
                    <li className="sidebar__link-item">
                        <a className="sidebar__link" href="/">Profile</a>
                    </li>
                    <li className="sidebar__link-item">
                        <a className="sidebar__link" href="/">Messages</a>
                    </li>
                    <li className="sidebar__link-item">
                        <a className="sidebar__link" href="/">News</a>
                    </li>
                    <li className="sidebar__link-item">
                        <a className="sidebar__link" href="/">Music</a>
                    </li>
                    <li className="sidebar__link-item">
                        <a className="sidebar__link" href="/">Settings</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar
