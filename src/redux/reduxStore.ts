import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import logger from 'redux-logger'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

const myLogger = (store: any) => (next: any) => (action: any) => {
    console.log('Logged Action: ', action)
    next(action)
}


let reducers = combineReducers(
    {
        // TODO: short name
        profilePage: profileReducer,
        dialogs: dialogsReducer,
        users: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, {}, applyMiddleware(/*logger*/thunkMiddleware))

// ???
declare const window: Window &
    typeof globalThis & {
    store: any
}

window.store = store

export default store
