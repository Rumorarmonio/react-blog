import User from '../models'

enum types {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

function usersReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case types.FOLLOW:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    // @ts-ignore
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case types.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    // @ts-ignore
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case types.SET_USERS:
            return {...state, users: action.users}
        // return {...state, users: [...state.users, ...action.users]}
        case types.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case types.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: types.FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: types.UNFOLLOW, userId})
export const setUsersAC = (users: User[]) => ({type: types.SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: types.SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer
