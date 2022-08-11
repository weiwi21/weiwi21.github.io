import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * @todo Need to implement 404 page not found webpage, update images in website and make the website more mobile friendly
 */

function App() {
  const darkVal = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = React.useState<Boolean>(darkVal===null ? true : darkVal === "true");


  function toggleDarkMode() {
    localStorage.setItem("theme", (!darkMode).toString())
    setDarkMode(prevDarkMode => !prevDarkMode);
    console.log(darkMode)
  }

  return (
    <BrowserRouter>
      <Navbar darkMode= {darkMode} toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path='/' element={<Home darkMode= {darkMode}/>}/>
        <Route path='/projects' element={<Projects darkMode= {darkMode}/>} />
        <Route path='*' element={<ErrorPage darkMode={darkMode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
