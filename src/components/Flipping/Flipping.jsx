import React from "react";
import "./Flipping.css";

const Flipping = props => {
  const pStyles = {
    height: props.h,
    width: props.w
  };
  return (
    <div className="flip-card" id="first" style={pStyles}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{props.front}</div>
        <div className="flip-card-back">{props.back}</div>
      </div>
    </div>
  );
};

export default Flipping;
