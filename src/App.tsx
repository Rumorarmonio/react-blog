import React from 'react'
import './App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default App
