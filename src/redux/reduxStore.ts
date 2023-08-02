import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

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

export default store
