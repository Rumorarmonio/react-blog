import React from 'react'
import styles from './MessageItem.module.scss'

function MessageItem(props: any) {
    return (
        <li className={styles.message}>
            {props.message.text} --- id: {props.message.id}
        </li>
    )
}

export default MessageItem
