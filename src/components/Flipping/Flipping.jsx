import React, {useRef} from "react";
import PropTypes from "prop-types";
import "./Flipping.scss";

const Flipping = props => {
  const card = useRef();
  return (
    <div className="flip-card" id="first">
      <div ref={card} className="flip-card-inner">
        <div className="flip-card-front">
          {props.front}
          <button onClick={() => card.current.classList.toggle("rotate")}>View Map</button>
        </div>
        <div className="flip-card-back">
          {props.back}
          <button onClick={() => card.current.classList.toggle("rotate")}>X</button>
        </div>
      </div>
    </div>
  );
};

Flipping.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string
};

export default Flipping;
