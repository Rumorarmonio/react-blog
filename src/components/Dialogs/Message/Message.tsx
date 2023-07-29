import React from 'react'
import styles from './Message.module.scss'

function Message(props: any) {
    return (
        <li className={styles.message}>{props.message}</li>
    )
}

export default Message
