import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default App
