import React from 'react'
import styles from './Dialogs.module.scss'
import Message from './Message/Message'
import DialogLink from './DialogLink/DialogLink'

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                <DialogLink name="Daniel" id={1}/>
                <DialogLink name="Semen" id={2}/>
                <DialogLink name="Andrey" id={3}/>
                <DialogLink name="Sasha" id={4}/>
            </ul>
            <ul className={styles.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo!"/>
            </ul>
        </div>
    )
}

export default Dialogs
