import React from 'react'
import styles from './Sidebar.module.scss'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <a className={`${styles.link} ${styles.active}`} href="/Programming/Web/react/it-kamasutra/react-blog/public">Profile</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/Programming/Web/react/it-kamasutra/react-blog/public">Messages</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/Programming/Web/react/it-kamasutra/react-blog/public">News</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/Programming/Web/react/it-kamasutra/react-blog/public">Music</a>
                    </li>
                    <li>
                        <a className={styles.link} href="/Programming/Web/react/it-kamasutra/react-blog/public">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
