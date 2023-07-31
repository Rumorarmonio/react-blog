import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App(props: any) {
    return (
        <div className="app">
            <Header/>
            <Sidebar state={props.store.state.sidebar}/>
            <div className="content-container">
                <Routes>
                    <Route path="/profile"
                           element={
                               <Profile
                                   profilePage={props.store.state.profilePage}
                                   updateNewPostText={props.store.updateNewPostText}
                                   addPost={props.store.addPost}/>
                           }/>
                    <Route path="/dialogs/*"
                           element={
                               <Dialogs
                                   messagesPage={props.store.state.messagesPage}
                                   sendMessage={props.store.sendMessage}
                                   updateNewMessageText={props.store.updateNewMessageText}/>
                           }/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
