import React, { useState } from 'react';
import { useBaseUrl } from '../context/BaseUrlContext';
import "../styles/Login.css";
import axios from 'axios';
import { useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = useBaseUrl()

  

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      const response = await axios.post(`${baseUrl}/api/login/`, formData);
      
      // console.log("access:", response.data.access, "refresh:", response.data.refresh);
      const access_token = response.data.access;
      const refresh_token = response.data.refresh;
      
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      window.location.href = "/"
      // Redirect or update state upon successful login
      // Example: navigate to another page or update logged-in status
    } catch (error) {
      console.log("Error has occurred!", error);
    }
  };

  return (
    <div className='LoginPageBody'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="Logincard">
              <form onSubmit={handleSubmit} className="Loginbox">
                <h1>Login</h1>
                <p className="text-muted">Please enter your login and password!</p>
                <input type="text"name="username" className='LoginUsername' value={username}onChange={handleUsername}placeholder="Username"/>
                <input type="password" className='LoginPassword' name="password" value={password} onChange={handlePassword} placeholder="Password"/>
                <a className="forgot text-muted" href="#">
                  Forgot password?
                </a>
                <input type="submit" value="Login" />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <a href="#" className="icoFacebook" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoTwitter" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

