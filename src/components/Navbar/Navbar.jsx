import React, {useState} from "react";
import './Navbar.css';
import Icon from './Icon.jsx';
import classnames from "classnames";

function Navbar(){
  let [isDrop, setDrop] = useState(false);
  return(
    <div>
      <div className="container">
        <ul>
          <li className="main">
            <Icon/>
          </li>
          <li onClick={() => setDrop(!isDrop)} className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li className="middle">
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Press</li>
              <li>Contact Info</li>
            </ul>
          </li>
          <li className="end">
            <button>Contact Us</button>
          </li>
        </ul>
        <ul className={classnames('dropdown', {drop : isDrop})}>
          <li>About</li>
          <li>Team</li>
          <li>Press</li>
          <li>Contact Info</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
