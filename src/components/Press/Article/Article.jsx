import React from "react";
import "./Article.scss";
import PropTypes from "prop-types";

const Article = ({ img, title, date, author, text }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="Card" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>
          {date} by {author}
        </p>
        <p className="card-text">
          {text}
        </p>
        <a href="#" className="btn btn-primary">
          Read more
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
