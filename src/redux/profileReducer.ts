import {Post} from '../models'
import {profileAPI} from '../api/API'

enum types {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS'
}

let initialState = {
    posts: [
        {id: 1, text: 'Hi girls and hi zyabls', likes: 15},
        {id: 2, text: 'And hi babybon my little zyabls', likes: 20},
        {id: 3, text: 'It\'s my first post!', likes: 25}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

function profileReducer(state: any = initialState, action: any) {
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
        case types.SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostCreator = () => ({type: types.ADD_POST})
export const setUserProfile = (profile: any) => ({type: types.SET_USER_PROFILE, profile})
export const updateNewPostCreator = (text: string) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text})
export const setStatus = (status: string) => ({type: types.SET_STATUS, status})

// thunks
export const getProfile = (userId: number) =>
    (dispatch: Function) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
    
export const getStatus = (userId: number) =>
    (dispatch: Function) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }

export const updateStatus = (status: string) =>
    (dispatch: Function) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }

export default profileReducer
