import React, {useContext} from 'react'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'
import StoreContext from '../../StoreContext'
import Friends from './Friends/Friends'

function Sidebar(props: any) {
    const store = useContext(StoreContext)
    return (
        <>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/dialogs">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/users">Users</NavLink>
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
            <Friends users={props.users}/>
        </>
    )
}

export default Sidebar
