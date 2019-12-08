import React from "react";
import moment from "moment";
import "./Article.scss";
import CalendarIcon from "../CalendarIcon";
import PropTypes from "prop-types";

const Article = ({ img, title, date, author, text }) => {
  return (
    <div className="card">
      <img src={img} alt="Card" />
      <div className="card-body">
        <p><CalendarIcon /><span>{moment(date).format('ll')}</span></p>
        <p className="author">by {author}</p>
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
        <a href="#" className="read-more">
          Read More >
        </a>
      </div>
    </div>
  );
};

Article.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string
};

export default Article;
