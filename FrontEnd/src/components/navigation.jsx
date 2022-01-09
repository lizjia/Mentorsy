import React from "react"
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "../pages/LoginForm";

const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div class="row">
          <logo src="icon.png" />
          <h1> Mentorsy</h1>
        </div>
        <div class="col-md-1 align-right">
          <right>
          {/* <button onClick = {LoginForm} className="navbar-button"> Log in </button> */}
            <input type = 'button' value = 'login' onClick = {event => window.location.href = '/login'}></input>
          </right>
      </div>
    </nav>
  )
}

export default Navigation