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

export class Dialog {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
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

export default class State {
    messagesPage: {
        dialogs: Dialog[],
        messages: Message[]
    }
    profilePage: {
        posts: Post[]
    }

    constructor(messagesPage: { dialogs: Dialog[]; messages: Message[] }, profilePage: { posts: Post[] }) {
        this.messagesPage = messagesPage
        this.profilePage = profilePage
    }
}
