import React from "react";
import "../../styles/container.scss"
import "./AboutUs.scss";

const paragraphs = [
  "Take an active role as advisors and/or board members in companies we invest in",
  "Help these companies with business development, partnerships and strategy",
  "Hhelp with the buildout and the hiring of the management staff",
  "Advise companies on the structure of future financing rounds and the path to public markets if appropriate",
  "Work with companies to find tech that improves their experience and/or workflow."
];

const AboutUs = () => {
  return (
    <section id="aboutus" className="container">
      <div className="aboutus-title-container">
        <h2>Our Mandate</h2>
      </div>
      <div className="aboutus-paragraph-container">
        {paragraphs.map((paragraph, index) => {
          return (
            <p key={index} className="aboutus-paragraph">
              {paragraph}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
