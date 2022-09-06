import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import '../Component/Login.css'



const Login = ({dataCheck }) => {
  let navigate = useNavigate()

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [cookies, setCookie] = useCookies();

  let submitForm = (e) => {
    e.preventDefault()
    const userData = { email: email, password: password }
    const sessionData = JSON.parse(sessionStorage.getItem('userData'));
    const getUser = sessionData?.find(data => data.email === userData.email)
    if (getUser && getUser.password == userData.password || dataCheck) {
      setCookie('Username', getUser?.email, { path: '/' });
      navigate('/home')
    } else {
      alert("Wrong credentials")
    }
  }
  return (
    <div className="login ">

      <h1>Login</h1>
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"></input>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" ></input>
      <div className="button" data-testid="submit-form" onClick={submitForm}>Login</div>
      <div>or</div>
      <Link to='/' className="button">Register</Link>
    </div>
  )
}
export default Login 