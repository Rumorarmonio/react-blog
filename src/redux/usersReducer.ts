import User from '../models'
import {usersAPI} from '../api/API'

enum types {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

function usersReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case types.FOLLOW:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    if ((user as any).id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case types.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    if ((user as any).id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case types.SET_USERS:
            return {...state, users: action.users}
        case types.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case types.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case types.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case types.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({type: types.FOLLOW, userId})
export const unfollowSuccess = (userId: number) => ({type: types.UNFOLLOW, userId})
export const setUsers = (users: User[]) => ({type: types.SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: types.SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: types.TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: types.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Function) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage))
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Function) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Function) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer
