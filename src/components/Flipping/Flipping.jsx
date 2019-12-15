import React from "react";
import PropTypes from "prop-types";
import "./Flipping.css";

const Flipping = props => {
  return (
    <div className="flip-card" id="first">
      <div className="flip-card-inner">
        <div className="flip-card-front">{props.front}</div>
        <div className="flip-card-back">{props.back}</div>
      </div>
    </div>
  );
};

Flipping.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string
};

export default Flipping;
