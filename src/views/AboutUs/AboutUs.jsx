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
    body: "Educate staff on the latest technologies with online and in-person courses",
    icon: teacherIcon
  },
  {
    body: "Provide data analysis tools to help with strategy development",
    icon: chartIcon
  },
  {
    body: "Produce reliable staff performance reviews and assessments",
    icon: employeeIcon
  },
  {
    body: "Advise on cost-effective solutions to technical requirements",
    icon: adviceIcon
  },
  {
    body: "Help companies address any hardware needs they might have",
    icon: laptopIcon
  }
];

const AboutUs = () => {
  return (
    <section id="aboutus" className="container">
      <div className="aboutus-title-container">
        <h2>Our Mission</h2>
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
