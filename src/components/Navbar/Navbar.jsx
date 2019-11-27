import React from "react";
import './Navbar.css';
import Icon from './Icon.jsx';

function Navbar(){
  return(
    <>
      <ul>
        <li className="main">
          <Icon/>
        </li>
        <li className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </li>
        <li className="side">
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Press</li>
            <li>Contact Info</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default Navbar;
