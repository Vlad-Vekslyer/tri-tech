import React from "react";
import Flipping from "../../components/Flipping/Flipping.jsx";
import Myform from "./myForm";

import "./Contact.scss";
import { checkPropTypes } from "prop-types";

function Contact() {
  return (
    <>
      <div className="containerContact">
        <p id="contactTitle">Contact Tri-Tech</p>
        <p id="contactDesc">Ask us anything! We are here for you</p>
        <h2 className="contactPersonal">
          Thomas Diaz | 514.716.3897 | ThomasDiaz@tritech.ca
        </h2>
        <hr/>
        <h2 className="contactPersonal">
          Richard Hopkins | 819.947.0220 | RichardHopkins@tritech.ca
        </h2>
        <Myform />
      </div>
      <div className="containerMaps">
        <div className="maps">
          <>
            <Flipping
              front={
                <>
                  <h2>Vancouver</h2>
                  <p>555 W Hastings St, Suite 2020 Vancouver, BC V6B 4N6</p>
                </>
              }
              back={
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9827.338881155312!2d-123.11513785793548!3d49.27780344110362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717860aced7d%3A0x50dd6fe331e37ba1!2sVancouver%20Lookout!5e0!3m2!1sen!2sca!4v1578219234558!5m2!1sen!2sca"
                />
              }
            />
          </>

          <>
            <Flipping
              front={
                <>
                    <h2>Toronto</h2>
                    <p>1 Dundas St E, Unit 5000 Toronto, ON M5B 2R8</p>
                </>
              }
              back={
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10287.49617545933!2d-79.39348389210728!3d43.651680888167235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cad13905ff%3A0xfba1e6ac7018788a!2sYonge-Dundas%20Square!5e0!3m2!1sen!2sca!4v1578219370922!5m2!1sen!2sca"
                />
              }
            />
          </>

          <>
            <Flipping
              front={
                <>
                    <h2>Brazil</h2>
                    <p>Sbs Lotes 3/4, SBS Q. 4 - Asa Sul, Brasília - DF, 70092-900, Brazil</p>
                </>
              }
              back={
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10858.443141913696!2d-47.881852077094905!3d-15.801843474062789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3adf2b5b983f%3A0xc4c1f28c429a59a5!2sCaixa%20Cultural!5e0!3m2!1sen!2sca!4v1578219583856!5m2!1sen!2sca"
                />
              }
            />
          </>
        </div>
        <p id="copyright"> &copy; Copyright Tri-Tech Co. 2020</p>
      </div>
    </>
  );
}

export default Contact;
