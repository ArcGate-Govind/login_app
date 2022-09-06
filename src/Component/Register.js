import React from 'react'
import '../Component/Register.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [reEnterpassword, setReEnterpassword] = useState("")

  let navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    vaildation()
  }

  const vaildation = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('email invalid')
    } else if (password !== reEnterpassword) {
      alert('password not matched')
    } else {
      let newData = { name: name, email: email, password: password }
      let userDataCheck = sessionStorage.getItem('userData');
      if (userDataCheck == null) {
        userDataCheck = []
      } else {
        userDataCheck = JSON.parse(userDataCheck)
      }
      let checkEmail = userDataCheck.find(data => data.email === newData.email)
      if (checkEmail) {
        alert("User already present")``
      } else {
        userDataCheck.push(newData)
        sessionStorage.setItem('userData', JSON.stringify(userDataCheck));
        setName("")
        setEmail("");
        setPassword("");
        setReEnterpassword("")
        navigate('/login')

      }

    }
  }

  return (
    <div className="register">
      <form>

        <h1>Register</h1>
        <input aria-label="username-input" type="text" name="name" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)}></input>
        <input aria-label="email-input" type="text" name="email" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} ></input>
        <input aria-label="password-input" type="password" name="password" value={password} placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}  ></input>
        <input aria-label="repassword-input" type="password" name="reEnterPassword" value={reEnterpassword} placeholder="Re-enter Password" onChange={(e) => setReEnterpassword(e.target.value)} ></input>
        <button data-testid="submit-form" onClick={(e) => submitForm(e)} className="button" type="submit" >Register</button>
        <div>or</div>
        
        <Link to='/login' className="button">Login</Link>
      </form>
    </div>
  )
}

export default Register