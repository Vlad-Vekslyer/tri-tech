import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Article from "./Article/Article.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./Article/img/baseball-1.jpeg";
import img2 from "./Article/img/img-sport.jpeg";
import img3 from "./Article/img/img-sport.jpeg";

function App() {
  return (
    <>
      <Navbar />

      <Article
        title="news1"
        date="November 25 2019"
        author="Jon Doe"
        img={img1}
      />
      <Article
        title="news2"
        date="October 25 2019"
        author="James Smith"
        img={img2}
      />
      <Article
        title="news3"
        date="May 25 2019"
        author="Michel Smith"
        img={img3}
      />
    </>
  );
}

export default App;
