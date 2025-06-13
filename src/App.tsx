import React from 'react'
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kidney from './components/kidney/Kidney';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/kidney' element = {<Kidney/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
