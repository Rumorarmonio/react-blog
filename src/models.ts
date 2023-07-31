export class Post {
    id: number
    text: string
    likes: number

    constructor(id: number, text: string, likes: number) {
        this.id = id
        this.text = text
        this.likes = likes
    }
}

export class User {
    id: number
    name: string
    avatar: string

    constructor(id: number, name: string, avatar: string) {
        this.id = id
        this.name = name
        this.avatar = avatar
    }
}

export class Message {
    id: number
    text: string

    constructor(id: number, text: string) {
        this.id = id
        this.text = text
    }
}

export class State {
    messagesPage: {
        users: User[],
        messages: Message[],
        newMessageText: string
    }
    profilePage: {
        posts: Post[],
        newPostText: string
    }
    sidebar: {
        friends: User[]
    }

    constructor(
        messagesPage: { users: User[]; messages: Message[]; newMessageText: string },
        profilePage: { posts: Post[]; newPostText: string }
    ) {
        this.messagesPage = messagesPage
        this.profilePage = profilePage
        this.sidebar = {friends: []}
        this.sidebar.friends = messagesPage.users
    }
}

// this.sidebar = {friends: []}
// this.sidebar.friends = messagesPage.users

export class Action {
    type: string
    newText?: string

    constructor(type: string, newText?: string) {
        this.type = type
        this.newText = newText
    }
}

export default class Store {
    get getState(): State {
        return this.#state!!
    }

    set setState(value: State) {
        this.#state = value
    }

    #state?: State
    subscribe: Function
    dispatch: Function


    constructor(state: State, subscribe: Function, dispatch: Function) {
        this.#state = state
        this.subscribe = subscribe
        this.dispatch = dispatch
    }
}
