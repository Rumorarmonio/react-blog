import React from 'react'
import './App.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Footer from './components/Footer'

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
