import React from "react"
import Popup from 'reactjs-popup';
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';


 const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div class="row">
          <logo src="icon.png" />
          <h1> Mentorsy</h1>
        </div>
        <div class="col-md-1 align-right">
          <right>
          <button className="navbar-button"> Log in </button>
          </right>
      </div>
    </nav>
  )
}

export default Navigation
