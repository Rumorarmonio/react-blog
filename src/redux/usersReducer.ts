import User from '../models'

enum types {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
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
        case types.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: types.FOLLOW, userId})
export const unfollow = (userId: number) => ({type: types.UNFOLLOW, userId})
export const setUsers = (users: User[]) => ({type: types.SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: types.SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: types.TOGGLE_IS_FETCHING, isFetching})

export default usersReducer