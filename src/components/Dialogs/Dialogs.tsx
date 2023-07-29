import React from 'react'
import styles from './Dialogs.module.scss'
import {NavLink} from 'react-router-dom'

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                <li>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/dialogs/1">Dimych</NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/dialogs/2">Semen</NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/dialogs/3">Andrey</NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.link} to="/dialogs/4">Sasha</NavLink>
                </li>
            </ul>
            <ul className={styles.messages}>
                <li className={styles.message}>Hi</li>
                <li className={styles.message}>How are you?</li>
                <li className={styles.message}>Yo!</li>
            </ul>
        </div>
    )
}

export default Dialogs
