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

  const Submitfrom = (e) => {
    e.preventDefault()
    vaildation()
  }

  const vaildation = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('email invalid')
    } else if (password !== reEnterpassword) {
      alert('password not matched')
    } else {
      let NewData = { name: name, email: email, password: password }
      let userDataCheck = sessionStorage.getItem('userData');
      if (userDataCheck == null) {
        userDataCheck = []
      } else {
        userDataCheck = JSON.parse(userDataCheck)
      }
      let checkEmail = userDataCheck.find(data => data.email === NewData.email)
      if (checkEmail) {
        alert("User already present")
      } else {
        userDataCheck.push(NewData)
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
      <form onSubmit={(e) => Submitfrom(e)}>

        <h1>Register</h1>
        <input type="text" name="name" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)}></input>
        <input type="text" name="email" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} ></input>
        <input type="password" name="password" value={password} placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}  ></input>
        <input type="password" name="reEnterPassword" value={reEnterpassword} placeholder="Re-enter Password" onChange={(e) => setReEnterpassword(e.target.value)} ></input>
        <button className="button" type="submit" >Register</button>
        <div>or</div>
        
        <Link to='/login' className="button">Login</Link>
      </form>
    </div>
  )
}

export default Register