import React, {useRef} from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import Dialog from './Dialog/Dialog'
import {Message, User} from '../../models'

function Dialogs(props: any) {
    const sendMessageElement = useRef<HTMLTextAreaElement>(null)

    function sendMessage() {
        let text = sendMessageElement.current?.value
        alert(text)
    }

    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {
                    props.state.users.map((user: User) => (
                        <Dialog user={user}/>
                    ))
                }
            </ul>
            <div className={styles.right}>
                <ul className={styles.messages}>
                    {
                        props.state.messages.map((message: Message) => (
                            <MessageItem message={message}/>
                        ))
                    }
                </ul>
                <div className={styles.postForm}>
                    <textarea ref={sendMessageElement}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
