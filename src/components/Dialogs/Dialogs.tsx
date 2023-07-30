import React from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import Dialog from './Dialog/Dialog'
import {Message, User} from '../../models'

function Dialogs(props: any) {
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {
                    props.state.users.map((user: User) => (
                        <Dialog user={user}/>
                    ))
                }
            </ul>
            <ul className={styles.messages}>
                {
                    props.state.messages.map((message: Message) => (
                        <MessageItem message={message}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Dialogs
