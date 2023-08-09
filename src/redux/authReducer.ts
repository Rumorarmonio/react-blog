enum types {
    SET_USER_DATA = 'SET_USER_DATA'
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserData = (id: number, login: string, email: string,) => ({type: types.SET_USER_DATA, data: {id, login, email}})

export default authReducer
