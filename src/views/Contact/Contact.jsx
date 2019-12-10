import React from "react";
import Flipping from "../../components/Flipping/Flipping.jsx";
import Myform from "./myForm";

import "./Contact.scss";
import { checkPropTypes } from "prop-types";

function Contact() {
  return (
    <>
      <div className="containerContact">
        <p id="contactTitle">Contact Brickhouse</p>
        <p id="contactDesc">Ask us anything! We are here for you</p>
        <h2 id="contactPersonal">
          Matt Hoffar | 604.616.1514 | MATT@BRICKHOUSE.VENTURES
        </h2>
        <h2 id="contactPersonal">
          Spencer Smyl | 604.785.4229 | SPENCER@BRICKHOUSE.VENTURES
        </h2>
        <Myform />
      </div>
      <div className="containerMaps">
        <div className="maps">
          <div id="mapOne">
            <Flipping
              h="400px"
              w="400px"
              front={
                <>
                  <h2>
                    <h2>Vancouver Office:</h2>
                    303 - 570 Granville Street Vancouver B.C., V6C 3P1
                  </h2>
                </>
              }
              back={
                <iframe
                  className="map1"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5803841779402!2d-123.1181094843105!3d49.28434787933156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867178a44b0e6d%3A0xd1b181b45c34984c!2s303-543%20Granville%20St%2C%20Vancouver%2C%20BC%20V6C%201X8!5e0!3m2!1spt-BR!2sca!4v1574718654526!5m2!1spt-BR!2sca"
                />
              }
            />
          </div>

          <div id="mapTwo">
            <Flipping
              h="400px"
              w="400px"
              front={
                <>
                  <h2>
                    <h2>Toronto Office:</h2>
                    393 University Avenue, Suite 2000 Toronto ON, M5G 1E
                  </h2>
                </>
              }
              back={
                <iframe
                  className="map2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4141.830299008049!2d-79.3884735726749!3d43.65382906270421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ceb74396a7%3A0x64ab421386854d88!2s393%20University%20Ave%20%232000%2C%20Toronto%2C%20ON%20M5G%201E6!5e0!3m2!1spt-BR!2sca!4v1574722698637!5m2!1spt-BR!2sca"
                />
              }
            />
          </div>

          <div id="mapThree">
            <Flipping
              h="400px"
              w="400px"
              front={
                <>
                  <h2>
                    <h2>Mexico Office:</h2>
                    Sierra Santa Rosa 47, Colonia Reforma Social, CDMX 11650
                    Mexico City
                  </h2>
                </>
              }
              back={
                <iframe
                  className="map2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.516841973273!2d-99.21695278509327!3d19.43327098688387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20221a76aa3dd%3A0x6a018dc82a69983b!2sSierra%20Santa%20Rosa%2047%2C%20Reforma%20Soc%2C%20Miguel%20Hidalgo%2C%2011650%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1spt-BR!2sca!4v1574722869700!5m2!1spt-BR!2sca"
                />
              }
            />
          </div>
        </div>
        <p id="copyright"> &copy; Copyright Brickhouse Ventures 2019</p>
      </div>
    </>
  );
}

export default Contact;
