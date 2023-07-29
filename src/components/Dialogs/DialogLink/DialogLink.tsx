import React from 'react'
import styles from './DialogLink.module.scss'
import {NavLink} from 'react-router-dom'

function DialogLink(props: any) {
    let path = '/dialogs/' + props.id
    return (
        <li>
            <NavLink className={navData => navData.isActive ? styles.active : styles.link} to={path}>{props.name}</NavLink>
        </li>
    )
}

export default DialogLink
