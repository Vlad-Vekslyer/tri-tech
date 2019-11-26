import React from "react";
import "./Article.scss";

const Article = prop => {
  return (
    <div>
      <div className="content card">
        <img className="card-img-top" src={prop.img} alt="Card" />
        <div className="card-body">
          <h3 className="card-title">{prop.title}</h3>
          <p>
            {prop.date} by {prop.author}
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
