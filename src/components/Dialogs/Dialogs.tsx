import React, {useRef} from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import Dialog from './Dialog/Dialog'
import {Message, User} from '../../models'

function Dialogs(props: any) {
    const textArea = useRef<HTMLTextAreaElement>(null)

    const sendMessage = () => props.sendMessage()

    const onTextChange = () => props.updateNewMessageText(textArea.current?.value)

    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {
                    props.messagesPage.users.map((user: User) => (
                        <Dialog user={user}/>
                    ))
                }
            </ul>
            <div className={styles.right}>
                <ul className={styles.messages}>
                    {
                        props.messagesPage.messages.map((message: Message) => (
                            <MessageItem message={message}/>
                        ))
                    }
                </ul>
                <div className={styles.postForm}>
                    <textarea onChange={onTextChange} ref={textArea} value={props.messagesPage.newMessageText}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
