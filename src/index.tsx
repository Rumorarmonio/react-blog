import React from 'react'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import {rerenderEntireTree} from './render'
import state, {addPost, sendMessage, updateNewMessageText, updateNewPostText} from './redux/state'

rerenderEntireTree(state, addPost, updateNewPostText, sendMessage, updateNewMessageText)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
