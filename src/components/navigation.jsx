import React from "react"
import Popup from 'reactjs-popup';
import Login from "./login";

const Modal = () => (
  <Popup trigger={<button className="navbar-button"> Log in </button>} position="centre">
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

      <div className='navbar-header'>
        <img src="icon.png" />
        <a className='navbar-brand page-scroll'>
          Mentorsy
        </a>
        <div>
          <Modal />
          <div id="popup-root" />
        </div>

      </div>
    </nav>
  )
}
