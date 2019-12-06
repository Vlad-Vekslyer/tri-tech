import React, {useState} from "react";
import './Navbar.css';
import Icon from './Icon.jsx';
import classnames from "classnames";

function Navbar(){
  let [isDrop, setDrop] = useState(false);
  return(
    <div>
      <div className="container">
        <ul className="top">
          <li className="main">
            <Icon/>
          </li>
          <li onClick={() => setDrop(!isDrop)} className="hamburger">
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
        <ul className={classnames('dropdown', {drop : isDrop})}>
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Network</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
