import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Dictionary from './components/Dictionary'

function App() {
  return (
    <div style={{backgroundColor:"#3AAFA9",height:"100vh"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dictionary' element={<Dictionary/>}/>
      </Routes>
    </div>
  )
}

export default App
