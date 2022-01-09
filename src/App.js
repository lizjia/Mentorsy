import './App.css';
import MainPage from './pages/MainPage';
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom";
import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Preferences from './pages/Preferences';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<MainPage/>} />
        <Route path="/preferences" element = {<Preferences/>} />
        {/* <Route path ="" element = {}/> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;