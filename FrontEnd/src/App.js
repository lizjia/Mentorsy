import './App.css';
import MainPage from './pages/MainPage';
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom";
import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Preferences from './pages/Preferences';
import LoginForm from './pages/LoginForm';
// import ChatFeed from './components/ChatFeed';
import MessageForm from './components/MessageForm';
import Profile from './components/Profile';
import Settings from './pages/Settings';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<MainPage/>} />
        <Route path="/preferences" element = {<Preferences/>} />
        <Route path="/login" element = {<LoginForm/>} />
        <Route path="/chat" element = {<MessageForm/>} />
        <Route path="/profile" element = {<Profile/>} />
        <Route path="/settings" element = {<Settings/>} />

        {/* <Route path ="" element = {}/> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;