import React from "react";
import "./AboutUs.scss";
import img from "../../assets/AboutUs-img.png";

const paragraphs = [
  "We take an active role as advisors and/or board members in companies we invest in",
  "- We help these companies with business development, partnerships and strategy",
  " - We help with the buildout and the hiring of the management staff",
  "  - We advise companies on the structure of future financing rounds and the path to public markets if appropriate",
  "  - Work with companies to find tech that improves their experience and/or workflow."
];

const AboutUs = () => {
  return (
    <section className="aboutus-container">
      <div>
        <img className="aboutus-img" src={img} alt="" />
      </div>
      <div>
        <h2 className="aboutus-title">About Us</h2>

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
