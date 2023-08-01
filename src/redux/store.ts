import Store, {State, Post, Message, Action} from '../models'

enum types {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
}

const _state: State = new State(
    {
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
    },
    {
        posts: [
            {id: 1, text: 'Hi girls and hi zyabls', likes: 15},
            {id: 2, text: 'And hi babybon my little zyabls', likes: 20},
            {id: 3, text: 'It\'s my first post!', likes: 25}
        ],
        newPostText: ''
    }
)

let rerenderEntireTree = (store: Store) => console.log('unreachable function')

export const store: Store = new Store
(
    _state,

    (observer: any) => {
        rerenderEntireTree = observer
    },

    (action: Action) => {
        if (action.type === types.ADD_POST) {
            _state.profilePage.posts.push(
                new Post(5, _state.profilePage.newPostText, 0)
            )
            _state.profilePage.newPostText = ''
            rerenderEntireTree(store)
        } else if (action.type === types.UPDATE_NEW_POST_TEXT) {
            _state.profilePage.newPostText = action.newText!!
            rerenderEntireTree(store)
        } else if (action.type === types.SEND_MESSAGE) {
            _state.messagesPage.messages.push(
                new Message(5, _state.messagesPage.newMessageText)
            )
            _state.messagesPage.newMessageText = ''
            rerenderEntireTree(store)
        } else if (action.type === types.UPDATE_NEW_MESSAGE_TEXT) {
            _state.messagesPage.newMessageText = action.newText!!
            rerenderEntireTree(store)
        }
    }
)

export const addPostCreator = () => (new Action(types.ADD_POST))
export const updateNewPostCreator = (text: string) => (new Action(types.UPDATE_NEW_POST_TEXT, text))

export const sendMessageCreator = () => (new Action(types.SEND_MESSAGE))
export const updateNewMessageCreator = (text: string) => (new Action(types.UPDATE_NEW_MESSAGE_TEXT, text))

// store.subscribe()

export default store
