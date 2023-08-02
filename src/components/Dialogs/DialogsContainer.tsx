import React from 'react'
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

function DialogsContainer(props: any) {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => props.store.dispatch(sendMessageCreator())

    const onNewMessageChange = (text: string) => props.store.dispatch(updateNewMessageCreator(text))

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}/>
    )
}

export default DialogsContainer
