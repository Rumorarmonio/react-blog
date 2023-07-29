import State from '../models'

const state: State = new State(
    {
        dialogs: [
            {id: 1, name: 'Daniel'},
            {id: 2, name: 'Semen'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Sasha'}
        ],
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'Yo!'},
            {id: 4, text: 'Yo!'},
            {id: 5, text: 'Yo!'},
        ]
    },
    {
        posts: [
            {id: 1, text: 'Hi girls and hi zyabls', likes: 15},
            {id: 2, text: 'And hi babybon my little zyabls', likes: 20},
            {id: 3, text: 'It\'s my first post!', likes: 25}
        ]
    }
)

export default state


