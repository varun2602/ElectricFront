import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios';


// Axios setup for base URL and default headers
axios.defaults.baseURL = "https://h4u2d4fnti.execute-api.us-east-1.amazonaws.com/dev";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');

// Axios response interceptor to refresh token on 401 responses
axios.interceptors.response.use(
  response => {
    // If the request was successful, return the response
    return response;
  },
  async error => {
    const originalRequest = error.config;
     console.log("Response intercepted")
    // Check if error response status is 401 and a refresh token exists
    if (error.response.status === 401 && localStorage.getItem('refreshToken')) {
      // Attempt to refresh the access token
      try {
        console.log("refresh process has begun")
        const response = await axios.post('/api/login/refresh/', {
          refresh: localStorage.getItem('refreshToken')
        });
        console.log(response.data)
        // If refresh successful, update access token and retry original request
        localStorage.setItem('accessToken', response.data.access);
        originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
        return axios(originalRequest);
      } catch (error) {
        // If refresh fails, redirect to login page or handle accordingly
        console.log(error)
        clearTokens()
        redirectToLogin();
        return Promise.reject(error);
      }
    } else if (error.response.status === 401) {
      // If no refresh token or refresh failed, redirect to login page
      clearTokens()
      redirectToLogin();
    }

    // For other errors, simply reject with the error object
    return Promise.reject(error);
  }
);

// // Function to clear tokens from local storage
const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

// Function to redirect to the login page
const redirectToLogin = () => {
  // Replace with your logic to redirect to the login page
  console.log('Redirecting to login page');
  window.location.href = "/login"
  // Example: React Router redirection
  // history.push('/login');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
