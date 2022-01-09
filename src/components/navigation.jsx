import React from "react"
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div class="row">
        <h1> Mentorsy</h1>
        <div class="col-md-1">
          <button className="navbar-button"> Log in </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation