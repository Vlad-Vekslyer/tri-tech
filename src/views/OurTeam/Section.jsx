import React, {useState} from "react";
import classNames from "classnames";

import "./OurTeam.scss";
import img from "../../assets/AboutUs-img.png";

const Section = (props) => {
  let [isHidden, setHidden] = useState(true);
  return(
    <div className="ourTeam-content">
      <div className="ourTeam-img-section">
        <img className="ourTeam-img" src={img} alt="" />
      </div>
      <div className="ourTeam-content-section">
        <p className="ourTeam-name">
          {props.name} {"/"} <span className="ourTeam-location">{props.location}</span>
        </p>
        <div className={classNames("mobile-only" ,{"drop" : !isHidden})}>
          {props.children}
        </div>
        <button onClick={() => setHidden(!isHidden)}>{isHidden ? "Expand" : "Collapse"}</button>
      </div>
    </div>
  )
}

export default Section
