import React from 'react'
import './App.css';
import Login from './Login';
import Form from './Form';
import Edit from './Edit';
import Admin from './Admin';
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";


const App = () => {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
        
        
        
      </>    
  )
}

export default App;
