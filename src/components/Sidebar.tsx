import React from 'react'
import styles from './Sidebar.module.scss'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <a className={`${styles.link} ${styles.active}`} href="/">Profile</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/">Messages</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/">News</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/">Music</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
