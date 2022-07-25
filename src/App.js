import React ,{useState} from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from './Component/Home'
import Login from './Component/Login'
import Register from './Component/Register'




const App = () => {
  
  
  return (
    <CookiesProvider>
    <Router>
    <Routes>
    <Route exact path="/" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </CookiesProvider>
  )
}

export default App