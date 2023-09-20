import React from 'react';
import './App.css';
import HomePage from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import Search from './Pages/Search/Search';
import Register from './Pages/Register/Register';
import ArticleDetails from './Components/ArticleDetatils/ArticleDetails';
function App() {
  return (
    <div className="app background"> {/* Apply the background class to the container */}
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/search" element={<Search />} />

          <Route path="/articles/:id" element={<ArticleDetails/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
