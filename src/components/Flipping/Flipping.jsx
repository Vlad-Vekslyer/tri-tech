import React from "react";
import PropTypes from "prop-types";
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

Flipping.propTypes = {
  h: PropTypes.string,
  w: PropTypes.string,
  front: PropTypes.string,
  back: PropTypes.string
};

export default Flipping;
