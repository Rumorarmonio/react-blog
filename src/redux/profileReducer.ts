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
        case types.ADD_POST: {
            const stateCopy = {...state}
            // TODO: deep copy
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(new Post(5, state.newPostText, 0))
            stateCopy.newPostText = ''
            return stateCopy
        }
        case types.UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostCreator = () => ({type: types.ADD_POST})
export const updateNewPostCreator = (text: string) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
