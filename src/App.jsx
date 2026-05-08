import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './components/Login'
import Signup from './components/Signup'
import Main from './components/Main'
import PlaceOrder from './components/PlaceOrder'
import Contact from './components/Contact'

const App = () => {
  return (
    
        <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    
 
  )
}

export default App