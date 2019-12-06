import React from "react";
import "./Article.scss";

const Article = ({ img, title, date, author }) => {
  return (
    <div>
      <div className="content card">
        <img className="card-img-top" src={img} alt="Card" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>
            {date} by {author}
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
