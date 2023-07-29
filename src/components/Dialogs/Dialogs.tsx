import React from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import DialogLink from './DialogLink/DialogLink'
import {Message, Dialog} from '../../models'

function Dialogs(props: any) {
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {
                    props.state.dialogs.map((person: Dialog) => (
                        <DialogLink person={person}/>
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
