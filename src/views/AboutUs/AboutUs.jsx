import React from "react";
import "../../styles/container.scss"
import "./AboutUs.scss";

import teacherIcon from "../../assets/Icons/chalkboard-teacher-solid.svg";
import chartIcon from "../../assets/Icons/chart-line-solid.svg";
import employeeIcon from "../../assets/Icons/address-card-regular.svg";
import adviceIcon from "../../assets/Icons/comments-dollar-solid.svg";
import laptopIcon from "../../assets/Icons/laptop-solid.svg";

const paragraphs = [
  {
    body: "Take an active role as advisors and/or board members in companies we invest in",
    icon: teacherIcon
  },
  {
    body: "Help these companies with business development, partnerships and strategy",
    icon: chartIcon
  },
  {
    body: "Help with the buildout and the hiring of the management staff",
    icon: employeeIcon
  },
  {
    body: "Advise companies on the structure of future financing rounds and the path to public markets",
    icon: adviceIcon
  },
  {
    body: "Work with companies to find tech that improves their experience and/or workflow.",
    icon: laptopIcon
  }
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
            <div className="aboutus-item">
              <img key={index} src={paragraph.icon}/>
              <p key={index} className="aboutus-paragraph">
                {paragraph.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
