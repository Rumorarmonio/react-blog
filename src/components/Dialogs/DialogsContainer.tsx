import {sendMessage, updateNewMessage} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => ({dialogs: state.dialogs})

const DialogsContainer = connect(mapStateToProps, {updateNewMessage, sendMessage})(Dialogs)

export default DialogsContainer
