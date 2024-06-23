import React, { useEffect, useState } from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 useEffect(function(){
  const access_token = localStorage.getItem("accessToken")
  if(access_token != null){
    setIsLoggedIn(true)
  }
})

  const LogoutFunction = function(){
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    window.location.href = "/login"
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
        <div className="wrapper">
          
        </div>
  <div className="container-fluid all-show">
    <a className="navbar-brand" href="#">IndiaVoltEdge <i className="fa fa-codepen"></i></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/search">Search</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/apply">Apply</a>
        </li>

        {isLoggedIn === true?<li className="nav-item">
          <a className="nav-link" href="/applied">Application List</a> 
        </li> : null}

        <li className="nav-item">
        {isLoggedIn == true ? <a className="nav-link" onClick={LogoutFunction} href="#">Logout</a> :
          <a className="nav-link" href="/login">Login</a>}
        </li>

        <li className="nav-item">
        { isLoggedIn ? null : <a className="nav-link"  href="/register">Register</a> }
        </li>
        
        
      </ul>
      <div className="d-flex flex-column sim">

        <span>Empowering the Future, One Spark at a Time</span>
        <small className="text-primary">Brightening Lives with Every Connection</small>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
