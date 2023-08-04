import React, {SyntheticEvent} from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import Dialog from './Dialog/Dialog'
import {Message, User} from '../../models'

function Dialogs(props: any) {
    const state = props.dialogsPage

    let dialogsElements = state.users.map((user: User) => <Dialog key={user.id} user={user}/>)

    let messagesElements = state.messages.map((message: Message) => <MessageItem key={message.id} message={message}/>)

    const sendMessage = () => props.sendMessage()

    const onMessageChange = (e: SyntheticEvent) => props.updateNewMessageBody((e.target as HTMLTextAreaElement).value)

    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {dialogsElements}
            </ul>
            <div className={styles.right}>
                <ul className={styles.messages}>
                    {messagesElements}
                </ul>
                <div className={styles.postForm}>
                    <textarea onChange={onMessageChange} value={state.newMessageText}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
