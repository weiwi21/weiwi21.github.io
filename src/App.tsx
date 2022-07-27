import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const darkVal = localStorage.getItem("theme")
  console.log(darkVal)
  const [darkMode, setDarkMode] = React.useState<Boolean>(darkVal===null ? true : darkVal ==="true");

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
    localStorage.setItem("theme", darkMode.toString())
  }

  return (
    <BrowserRouter>
      <Navbar darkMode= {darkMode} toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path='/' element={<Home darkMode= {darkMode}/>}/>
        <Route path='/about' element={<About darkMode= {darkMode}/>}/>
        <Route path='/projects' element={<Projects darkMode= {darkMode}/>} />
        <Route path='*' element={<ErrorPage darkMode={darkMode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
