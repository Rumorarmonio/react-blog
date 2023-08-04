import User from '../models'

enum types {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS'
}

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://yt3.googleusercontent.com/ytc/AOPolaTzK-nRd9dEvq83lpi8ecoANCboYK52hB6CmxO9=s900-c-k-c0x00ffffff-no-rj',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://static.tildacdn.com/tild3661-6365-4233-b165-613137313632/DSC_5406.jpg',
        //     followed: true,
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://app.fide.com/upload/5071/210e8ab022596837122032918a1fc653.jpg',
        //     followed: false,
        //     fullName: 'Andrew',
        //     status: 'I am a boss too',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // }
    ]
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
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: types.FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: types.UNFOLLOW, userId})
export const setUsersAC = (users: User[]) => ({type: types.SET_USERS, users})

export default usersReducer
