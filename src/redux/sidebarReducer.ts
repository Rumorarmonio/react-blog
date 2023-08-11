import {User} from '../models'

enum types {
    SET_USERS = 'SET_USERS',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
}

let initialState = {
    users: [],
    pageSize: 9,
    currentPage: 1
}

const sidebarReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case types.SET_USERS:
            return {...state, users: action.users}
        case types.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const toggleIsFetching = (isFetching: boolean) => ({type: types.TOGGLE_IS_FETCHING, isFetching})
export const setUsers = (users: User[]) => ({type: types.SET_USERS, users})

export default sidebarReducer
