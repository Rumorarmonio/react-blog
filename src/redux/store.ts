import Store, {State, Action} from '../models'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

const _state: State = new State(
    {
        users: [
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
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
        _state.profilePage = profileReducer(_state.profilePage, action)
        _state.messagesPage = dialogsReducer(_state.messagesPage, action)
        // _state.sidebar = sidebarReducer(_state.sidebar, action)

        rerenderEntireTree(store)
    }
)

// store.subscribe()

export default store
