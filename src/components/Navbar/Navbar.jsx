import React, {useState} from "react";
import './Navbar.scss';
import classnames from "classnames";

function Navbar(){
  let [isDrop, setDrop] = useState(false);
  return(
    <nav>
      <div className="nav-container">
        <ul className="top">
          <li className="start">
            <div/>Tri-Tech
          </li>
          <li onClick={() => setDrop(true)} className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li className="end">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Team</li>
              <li>Network</li>
              <li>Contact</li>
            </ul>
          </li>
        </ul>
        <ul className={classnames('dropdown', {dropped : isDrop})}>
          <li onClick={() => setDrop(false)} className="exit">X</li>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>TEAM</li>
          <li>NETWORK</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
