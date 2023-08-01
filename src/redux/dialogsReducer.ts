import {Action, Message} from '../models'

enum types {
    SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
}

function dialogsReducer(state: any, action: Action) {
    switch (action.type) {
        case types.UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText!!
            return state
        case types.SEND_MESSAGE:
            state.messages.push(
                new Message(5, state.newMessageText)
            )
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => (new Action(types.SEND_MESSAGE))
export const updateNewMessageCreator = (text: string) => (new Action(types.UPDATE_NEW_MESSAGE_TEXT, text))

export default dialogsReducer
