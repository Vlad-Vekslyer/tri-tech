import React, {useState} from "react";
import classNames from "classnames";

import "./OurTeam.scss";
import img from "../../assets/AboutUs-img.png";

const Section = (props) => {
  // decides whether to hide extra text in the mobile or not
  let [isHidden, setHidden] = useState(true);

  // get button-related markup and logic
  const getButton = () => (<button onClick={() => setHidden(!isHidden)}>{isHidden ? "Expand" : "Collapse"}</button>);
  return(
    <div className="ourTeam-content">
      <div className="ourTeam-img-section">
        <img className="ourTeam-img" src={img} alt="" />
      </div>
      <div className="ourTeam-content-section">
        <p className="ourTeam-name">
          {props.name}, <span className="ourTeam-location">{props.location}</span>
        </p>
        {/* can appear only on a mobile view when isHidden is true */}
        <div className={classNames({"mobile-hidden" : !isHidden}, "mobile-revealed")}>
          {props.revealed}
        </div>
        {/* will always appear on a desktop view regardless of state */}
        <div className={classNames({"mobile-hidden" : isHidden})}>
          {props.hidden}
        </div>
        {getButton()}
      </div>
    </div>
  )
}

export default Section
