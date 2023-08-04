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
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }

    constructor(id: number, photoUrl: string, followed: boolean, fullName: string, status: string, location: { city: string; country: string }) {
        this.id = id
        this.photoUrl = photoUrl
        this.followed = followed
        this.fullName = fullName
        this.status = status
        this.location = location
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
    userId?: number

    constructor(type: string, newText?: string, userId?: number) {
        this.type = type
        this.newText = newText
        this.userId = userId
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
