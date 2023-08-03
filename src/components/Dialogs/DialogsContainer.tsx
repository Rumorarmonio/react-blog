import React, {useContext} from 'react'
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'
import {connect} from 'react-redux'

// function DialogsContainer() {
//     const store = useContext(StoreContext)
//
//     // const state = props.store.getState().dialogsPage
//     const state = store.getState().dialogsPage
//
//     const onSendMessageClick = () => store.dispatch(sendMessageCreator())
//
//     const onNewMessageChange = (text: string) => store.dispatch(updateNewMessageCreator(text))
//
//     return (
//         <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}/>
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageCreator(text))

        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
