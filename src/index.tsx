import React from 'react'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import state, {addPost, sendMessage, subscribe, updateNewMessageText, updateNewPostText} from './redux/state'
import ReactDOM from 'react-dom/client'
import State from './models'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

function rerenderEntireTree(state: State) {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    sendMessage={sendMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>
    )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
