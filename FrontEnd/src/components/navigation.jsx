import React from "react"
import Popup from 'reactjs-popup';
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = () => (
  <Popup trigger={<button className="navbar-button"> Log in </button>} position="bottom centre">
    {close => (
      <div>
        <Login />
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div class="row">
        <div class="col-md-4">
          <img src="icon.png" />
          <a className='navbar-brand page-scroll'>
            Mentorsy
          </a>
        </div>
        <div class="col-md-4 offset-md-4">
          <Modal />
          <div id="popup-root" /></div>
      </div>
    </nav>
  )
}
