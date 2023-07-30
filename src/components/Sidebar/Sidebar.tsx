import React from 'react'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends'

function Sidebar(props: any) {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/dialogs">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <Friends friends={props.state.friends}/>
        </aside>
    )
}

export default Sidebar
