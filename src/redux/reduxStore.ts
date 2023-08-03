import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import logger from 'redux-logger'

const myLogger = (store: any) => (next: any) => (action: any) => {
    console.log('Logged Action: ', action)
    next(action)
}

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer
    }
)

let store = createStore(reducers, {}, applyMiddleware(logger/*thunk*/))

// ???
declare const window: Window &
    typeof globalThis & {
    store: any
}

window.store = store

export default store
