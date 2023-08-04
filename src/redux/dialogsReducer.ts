import {Action, Message} from '../models'

enum types {
    SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
}

let initialState = {
    users: [
        {id: 1, name: 'Daniel', avatar: 'https://yt3.googleusercontent.com/ytc/AOPolaTzK-nRd9dEvq83lpi8ecoANCboYK52hB6CmxO9=s900-c-k-c0x00ffffff-no-rj'},
        {id: 2, name: 'Semen', avatar: 'https://tagankateatr.ru/iw600/pages/farada2.jpg'},
        {id: 3, name: 'Andrey', avatar: 'https://static.tildacdn.com/tild3661-6365-4233-b165-613137313632/DSC_5406.jpg'},
        {id: 4, name: 'Sasha', avatar: 'https://app.fide.com/upload/5071/210e8ab022596837122032918a1fc653.jpg'}
    ],
    messages: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo!'},
        {id: 4, text: 'Yo!'},
        {id: 5, text: 'Yo!'},
    ],
    newMessageText: ''
}

function dialogsReducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case types.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case types.SEND_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [
                    ...state.messages,
                    new Message(
                        state.messages.reduce(
                            (previous: Message, current: Message) => previous.id > current.id ? previous : current
                        ).id + 1,
                        state.newMessageText
                    )
                ]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: types.SEND_MESSAGE})
export const updateNewMessageCreator = (text: string) => ({type: types.UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer
