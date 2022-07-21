import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";


const App = () => {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </Router>
        
        
        
      </>    
  )
}

export default App;
