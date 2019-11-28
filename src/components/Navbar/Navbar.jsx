import React, {useState} from "react";
import './Navbar.css';
import Icon from './Icon.jsx';
import classnames from "classnames";

function Navbar(){
  let [isDrop, setDrop] = useState(false);
  return(
    <div>
      <ul>
        <li className="main">
          <Icon/>
        </li>
        <li onClick={() => setDrop(!isDrop)} className="hamburger">
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
      <ul className={classnames('dropdown', {drop : isDrop})}>
        <li>About</li>
        <li>Team</li>
        <li>Press</li>
        <li>Contact Info</li>
      </ul>
    </div>
  )
}

export default Navbar;
