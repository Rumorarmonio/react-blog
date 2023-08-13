import {sendMessage, updateNewMessage} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import React from 'react'

const mapStateToProps = (state: any) => (
    {
        dialogs: state.dialogs
    }
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {updateNewMessage, sendMessage}),
    withAuthRedirect
)(Dialogs)
