import React from 'react'
import styles from './Dialog.module.scss'
import {NavLink} from 'react-router-dom'

// navData => navData.isActive ? styles.active + ' ' + styles.dialog : styles.link + ' ' + styles.dialog

function Dialog(props: any) {
    let path = '/dialogs/' + props.user.id

    return (
        <li>
            <NavLink className={({isActive}) => `${styles.dialog} ${(isActive ? styles.active : styles.inactive)}`} to={path}>
                <img className={styles.avatar} src={props.user.avatar}/>
                {props.user.name}
            </NavLink>
        </li>
    )
}

export default Dialog
