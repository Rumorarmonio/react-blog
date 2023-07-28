import React from 'react'
import styles from './Sidebar.module.scss'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <Link className={`${styles.link} ${styles.active}`} to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to="/dialogs">Messages</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to="/news">News</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to="/music">Music</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
