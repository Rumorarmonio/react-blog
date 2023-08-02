import React, {useContext} from 'react'
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

function DialogsContainer() {
    const store = useContext(StoreContext)

    // const state = props.store.getState().dialogsPage
    const state = store.getState().dialogsPage

    const onSendMessageClick = () => store.dispatch(sendMessageCreator())

    const onNewMessageChange = (text: string) => store.dispatch(updateNewMessageCreator(text))

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}/>
    )
}

export default DialogsContainer
