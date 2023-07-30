import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import State from './models'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

export function rerenderEntireTree(state: State, addPost: Function) {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    )
}
