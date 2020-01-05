import React, {useState} from "react";
import classNames from "classnames";

import Section from "./Section.jsx";

import "./OurTeam.scss";
import img from "../../assets/AboutUs-img.png";

const OurTeam = () => {
  return (
    <section className="ourTeam-container">
      <div className="ourTeam-bluebg"></div>
      {/* <div className="ourTeam-bluebg"></div> */}
      <h2 className="ourTeam-title">Our Team</h2>
      <Section name="Thomas Diaz" location="Vancouver">
        <>
          <p className="ourTeam-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis tempus hendrerit mi, eu placerat justo rhoncus eu. Morbi ut aliquet sem, vitae hendrerit magna.
            Maecenas quis imperdiet urna, sed facilisis mauris.
            Praesent quis sapien ex. Phasellus erat nisi, scelerisque a tempor in, pretium ac metus.
            Vivamus tincidunt eleifend facilisis. Quisque et rhoncus felis.
            In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
          </p>
          <p className="ourTeam-paragraph">
            Aliquam orci nisi, posuere vel elit non, eleifend vestibulum massa. Phasellus tincidunt dui sed auctor sodales.
            Nullam efficitur arcu tortor, id rhoncus neque pretium id. Donec congue ultricies dui, sit amet posuere mauris eleifend ut.
            Duis vel turpis non neque accumsan rutrum. Donec vestibulum justo non nibh accumsan iaculis.
          </p>
        </>
      </Section>
      <Section name ="Richard Hopkins" location="Vancouver">
        <>
          <p className="ourTeam-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis tempus hendrerit mi, eu placerat justo rhoncus eu. Morbi ut aliquet sem, vitae hendrerit magna.
          Maecenas quis imperdiet urna, sed facilisis mauris.
          Praesent quis sapien ex. Phasellus erat nisi, scelerisque a tempor in, pretium ac metus.
          Vivamus tincidunt eleifend facilisis. Quisque et rhoncus felis.
          In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
          Quisque et rhoncus felis. In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
          Nulla iaculis nulla vel aliquam viverra. Nam accumsan ex vitae tempus vehicula. Ut posuere diam id est imperdiet egestas.
          </p>
          <p className="ourTeam-paragraph">
            Duis tempus hendrerit mi, eu placerat justo rhoncus eu. Morbi ut aliquet sem, vitae hendrerit magna.
            Maecenas quis imperdiet urna, sed facilisis mauris.
            Praesent quis sapien ex. Phasellus erat nisi, scelerisque a tempor in, pretium ac metus.
          </p>
          <p className="ourTeam-paragraph">
            Vivamus tincidunt eleifend facilisis. Quisque et rhoncus felis.
            In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
          </p>
        </>
      </Section>
        <Section name="Justin Arbuckle" location="Toronto">
          <>
            <p className="ourTeam-paragraph">
              Duis tempus hendrerit mi, eu placerat justo rhoncus eu. Morbi ut aliquet sem, vitae hendrerit magna.
              Maecenas quis imperdiet urna, sed facilisis mauris.
              Praesent quis sapien ex. Phasellus erat nisi, scelerisque a tempor in, pretium ac metus.
            </p>
            <p className="ourTeam-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis tempus hendrerit mi, eu placerat justo rhoncus eu. Morbi ut aliquet sem, vitae hendrerit magna.
              Maecenas quis imperdiet urna, sed facilisis mauris.
              Praesent quis sapien ex. Phasellus erat nisi, scelerisque a tempor in, pretium ac metus.
              Vivamus tincidunt eleifend facilisis. Quisque et rhoncus felis.
              In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
              Quisque et rhoncus felis. In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
            </p>
            <p className="ourTeam-paragraph">
              Maecenas quis imperdiet urna, sed facilisis mauris.
              Praesent quis sapien ex. Phasellus erat nisi, scelerisque a tempor in, pretium ac metus.
              Vivamus tincidunt eleifend facilisis. Quisque et rhoncus felis.
              In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
              Quisque et rhoncus felis. In ullamcorper ipsum leo, pellentesque consequat neque porttitor vitae.
              Nulla iaculis nulla vel aliquam viverra.
            </p>
          </>
        </Section>
    </section>
  );
};

export default OurTeam;
