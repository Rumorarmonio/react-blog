import React from 'react'
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateNewMessageBody: (text: string) => dispatch(updateNewMessageCreator(text)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
