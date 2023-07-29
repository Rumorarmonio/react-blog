import React from 'react'
import styles from './Dialogs.module.scss'
import MessageItem from './Message/MessageItem'
import DialogLink from './DialogLink/DialogLink'
import {Message, Person, Post} from '../../models'

function Dialogs() {
    let persons: Person[] = [
        {id: 1, name: 'Daniel'},
        {id: 2, name: 'Semen'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
    ]

    let messages: Message[] = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo!'},
        {id: 4, text: 'Yo!'},
        {id: 5, text: 'Yo!'},
    ]

    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogLinks}>
                {persons.map((person: Person) => (
                    <DialogLink person={person}/>
                ))}
            </ul>
            <ul className={styles.messages}>
                {messages.map((message: Message) => (
                    <MessageItem message={message}/>
                ))}
            </ul>
        </div>
    )
}

export default Dialogs
