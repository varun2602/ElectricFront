import React, { useState } from 'react'
import "../styles/Register.css"
import { useBaseUrl } from '../context/BaseUrlContext';
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rPassword, setRpassword] = useState("")
  const [displaySuccess, setDisplaySuccess] = useState(false)
  const baseUrl = useBaseUrl()

 
  const handleUsername = function(event){
    setUsername(event.target.value)
  }
  const handleEmail = function(event){
    setEmail(event.target.value)
  }
  const handlePassword = function(event){
    setPassword(event.target.value)
  }
  const handleRepeatPassword = function(event){
    setRpassword(event.target.value)
  }

  const RegisterFunction = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('password2', rPassword);
      // const base_url = "http://127.0.0.1:8000"
      const response = await axios.post(`${baseUrl}/api/register/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Registration successful:', response.data);
      setDisplaySuccess(true)
      setEmail("")
      setUsername("")
      setPassword("")
      setRpassword("")
      return response.data; // Return whatever response you expect from your API
  
    } catch (error) {
      console.error('Error registering user:', error);
      throw error; // Rethrow the error to handle it further if needed
    }
  };
  

  return (
    <div>
    <section className="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{"borderRadius": "15px;"}}>
          
            <div className="card-body p-5">
            
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              {displaySuccess == true?<div style={{ color: 'green', fontSize: '18px', marginBottom: '10px' }}>
          Registration Successful!
        </div>: null}
              <form>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id = "username" value={username} onChange={handleUsername} className="form-control form-control-lg" />
                  <label className="form-label"  htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" value = {email} onChange={handleEmail} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" value={password} onChange={handlePassword} id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" value={rPassword} onChange={handleRepeatPassword} id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init onClick={RegisterFunction}
                    data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Register
