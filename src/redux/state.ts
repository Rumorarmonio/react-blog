import State, {Message, Post} from '../models'

let rerenderEntireTree = (state: State) => console.log('unreachable function')

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

export function addPost() {
    let newPost: Post = {
        id: 5,
        text: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export function updateNewPostText(newText: string) {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export function sendMessage() {
    let newMessage: Message = {
        id: 5,
        text: state.messagesPage.newMessageText,
    }
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state)
}

export function updateNewMessageText(newText: string) {
    state.messagesPage.newMessageText = newText
    rerenderEntireTree(state)
}

export function subscribe(observer: any) {
    rerenderEntireTree = observer
}

export default state
