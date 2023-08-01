import {Action, Post} from '../models'

enum types {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
}

function profileReducer(state: any, action: Action) {
    switch (action.type) {
        case types.ADD_POST: {
            state.posts.push(
                new Post(5, state.newPostText, 0)
            )
            state.newPostText = ''
            return state
        }
        case types.UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

export const addPostCreator = () => new Action(types.ADD_POST)
export const updateNewPostCreator = (text: string) => new Action(types.UPDATE_NEW_POST_TEXT, text)

export default profileReducer
