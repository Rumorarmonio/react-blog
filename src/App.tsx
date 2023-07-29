import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Sidebar/>
                <div className="content-container">
                    <Routes>
                        <Route path="/react-blog/profile" element={<Profile/>}/>
                        <Route path="/react-blog/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/react-blog/news" element={<News/>}/>
                        <Route path="/react-blog/music" element={<Music/>}/>
                        <Route path="/react-blog/settings" element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
