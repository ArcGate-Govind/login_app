import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import '../Component/Home.css'

const Home = () => {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies();
  let userDataGet = JSON.parse(sessionStorage.getItem('userData'))


  const logoutUser = () =>{
    removeCookie('Username')
    navigate("/")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            USERS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" style={{cursor:'pointer'}} onClick={logoutUser} aria-current="page">
              Logout
            </a>
            </div>
          </div>
        </div>
      </nav>
      <div className='userdata'>
        <h1 className='text-center m-5 text-info'>All Register User</h1>
      </div>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            {
              userDataGet ? 
              userDataGet.map((data) => {
                return (
                  <tr>
                    <td key={data.email}>{data.name}</td>
                  </tr>
                )
              }) : 'Loading'
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home