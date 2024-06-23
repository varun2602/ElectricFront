import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ApplyConnection from './components/ApplyConnection';
import { BaseUrlProvider } from './context/BaseUrlContext';
import './App.css'
import AppliedConnections from './components/AppliedConnections';

import SearchApplicant from './components/SearchApplicant';

function App() {
 

  return (
    <>
    <BaseUrlProvider>
    <Router>
    <Navbar/>  
    <div>
      {/* Navigation or other layout components can be placed here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/apply" element={<ApplyConnection/>} />
        <Route path="/applied" element={<AppliedConnections/>} />
        <Route path="/search" element={<SearchApplicant/>} />

      </Routes>
    </div>
  </Router>
  </BaseUrlProvider>
    </>
  )
}

export default App
