import {sendMessage, updateNewMessage} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'

const mapStateToProps = (state: any) => (
    {
        dialogs: state.dialogs
    }
)

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {updateNewMessage, sendMessage})(AuthRedirectComponent)

export default DialogsContainer
