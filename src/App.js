import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import Home from './Component/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import ProtectedRoute from './ProtectedRoute';


const App = () => {
  const [cookies] = useCookies();
  let userData = cookies.Username;


  return (
    <CookiesProvider>
    <Router>
    <Routes>
      <Route exact path="/" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/home" element={
        <ProtectedRoute>
        <Home/>
      </ProtectedRoute>  
      }
         />
      </Routes>
    </Router>
    </CookiesProvider>
  )
}

export default App