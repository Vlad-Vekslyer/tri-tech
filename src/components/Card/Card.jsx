import React  from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
    return (
        <>
            <div id="Card">
                <div className="img">
                    {props.imageUrl && <img src={props.imageUrl} alt="person-face_img" />}
                </div>
                <span> 
                    {props.name}, {props.location}
                    <p>{props.text}</p>    
                </span>
                
            </div>
        </>
    )
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string
};

Card.defaultProps = {
    imageUrl: null
};

export default Card;