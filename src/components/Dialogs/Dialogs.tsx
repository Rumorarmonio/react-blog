import React from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import DialogLink from './DialogLink/DialogLink'
import {Message, Person} from '../../models'

function Dialogs(props: any) {
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {
                    props.persons.map((person: Person) => (
                        <DialogLink person={person}/>
                    ))
                }
            </ul>
            <ul className={styles.messages}>
                {
                    props.messages.map((message: Message) => (
                        <MessageItem message={message}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Dialogs
