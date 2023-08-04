import {Action, Post} from '../models'

enum types {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
}

let initialState = {
    posts: [
        {id: 1, text: 'Hi girls and hi zyabls', likes: 15},
        {id: 2, text: 'And hi babybon my little zyabls', likes: 20},
        {id: 3, text: 'It\'s my first post!', likes: 25}
    ],
    newPostText: ''
}

function profileReducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case types.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case types.ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [
                    ...state.posts,
                    new Post(
                        state.posts.reduce(
                            (previous: Post, current: Post) => previous.id > current.id ? previous : current
                        ).id + 1,
                        state.newPostText,
                        0
                    )
                ]
            }
        default:
            return state
    }
}

export const addPostCreator = () => ({type: types.ADD_POST})
export const updateNewPostCreator = (text: string) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
