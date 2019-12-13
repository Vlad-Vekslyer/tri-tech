import React, {useRef} from "react";

import "./OurTeam.scss";
import img from "../../assets/AboutUs-img.png";

async function sleep(ms){
  return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

const Section = (props) => {
  let desktop = useRef(null);
  let mobile = useRef(null);
  // get button-related markup and logic
  const getButton = () => (
    <button onClick={async () => {
      if(desktop.current.classList.contains("drop")) {
        desktop.current.classList.remove("drop");
        await sleep(500);
        desktop.current.classList.toggle("mobile-hidden");
        mobile.current.classList.toggle("mobile-hidden");
      } else {
        desktop.current.classList.toggle("mobile-hidden");
        mobile.current.classList.toggle("mobile-hidden");
        setTimeout(() => desktop.current.classList.add("drop"), 20);
      }

    }}>
    Toggle</button>
  );
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
        <div ref={mobile} className="mobile-only">
          {props.revealed}
        </div>
        {/* will always appear on a desktop view regardless of state */}
        <div ref={desktop} className="mobile-hidden">
          {props.hidden}
        </div>
        {getButton()}
      </div>
    </div>
  )
}

export default Section
