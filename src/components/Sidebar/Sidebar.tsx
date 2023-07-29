import React from 'react'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/react-blog/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/react-blog/dialogs">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/react-blog/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/react-blog/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/react-blog/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
