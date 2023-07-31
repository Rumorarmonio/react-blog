import Store, {State, Post, Message} from '../models'

const state: State = new State(
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
    state,

    () => {
        let newPost: Post = {
            id: 5,
            text: state.profilePage.newPostText,
            likes: 0
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ''
        rerenderEntireTree(store)
    },

    (newText: string) => {
        state.profilePage.newPostText = newText
        rerenderEntireTree(store)
    },

    () => {
        let newMessage: Message = {
            id: 5,
            text: state.messagesPage.newMessageText,
        }
        state.messagesPage.messages.push(newMessage)
        state.messagesPage.newMessageText = ''
        rerenderEntireTree(store)
    },

    (newText: string) => {
        state.messagesPage.newMessageText = newText
        rerenderEntireTree(store)
    },

    (observer: any) => {
        rerenderEntireTree = observer
    }
)

store.subscribe()

export default store
