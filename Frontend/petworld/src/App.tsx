import React from 'react';
import './App.css';
import HomePage from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div className="app background"> {/* Apply the background class to the container */}
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
