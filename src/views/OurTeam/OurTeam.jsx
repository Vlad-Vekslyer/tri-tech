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
      <Section name="Matt Hoffar" location="Vancouver" hidden={(
        <>
          <p className="ourTeam-paragraph">
            Mr. Hoffar has over 20 years experience in sports and the capital
            markets. He worked 6 years in NBA for the team Vancouver Grizzlies
            ,10 years as the founder and coach of a youth basketball program and
            15 years in trading, operations and marketing both at a brokerage
            firm as an equities trader focused on micro and small cap stocks,
            and as part of the founding team of an asset management firm focused
            on algorithmic trading technology in the futures, equities and forex
            markets.
          </p>
          <p className="ourTeam-paragraph">
            Matt oversaw the trade desk and was involved with operations,
            compliance and marketing. Currently as Managing Partner of a Venture
            Builder, he takes on varying leadership and advisory roles to
            technology start ups in areas such as business development,
            strategy, capital structure and regulatory compliance.
          </p>
        </>
      )} revealed={(
        <p className="ourTeam-paragraph">
          Mr. Hoffar has over 20 years experience in sports and the capital
          markets. He worked 6 years in NBA for the team Vancouver Grizzlies...
        </p>
      )} />
      <Section name ="Spencer Smyl" location="Vancouver" hidden={(
        <>
          <p className="ourTeam-paragraph">
            Mr. Smyl has over 8 years of capital markets and entrepreneur
            experience with his focus on building and financing start-ups
            in the technology, cannabis, video game, esports, entertainment, heath
            care, and health & wellness industries of which he has helped raise
            over $30 million CAD. In that time, he has gained over 7 years of
            corporate director and management experience with both private and
            public companies. He is also the founder and CEO of Final Stage
            Entertainment Inc., a content production company with an academy
            nominated management team with over 100+ years of experience in
            media and entertainment.
          </p>
          <p className="ourTeam-paragraph">
            The company focuses on original content creation for the Millennial
            and Generation Z demographics. Prior to the capital markets he spent
            2 years working at the Senate of Canada under the Honorable Senator
            Larry Campbell.
          </p>
          <p className="ourTeam-paragraph">
            Spencer is currently working to combine his business networks in the
            sports, esports, politics, and finance to support the strategic
            vision and mandate of Brickhouse Ventures.
          </p>
        </>
      )} revealed ={(
        <p className="ourTeam-paragraph">
          Mr. Smyl has over 8 years of capital markets and entrepreneur
          experience with his focus on building and financing start-ups...
        </p>
      )}/>
        <Section name="Evan Kubes" location="Toronto" hidden={(
          <>
            <p className="ourTeam-paragraph">
              Mr. Kubes is the President and Co-founder of MKM Group – Canada’s
              first, and one of the world’s most influential, Law Firms and
              Management Agencies dedicated exclusively to esports and content
              creators
            </p>
            <p className="ourTeam-paragraph">
              In April 2019, MKM merged with Rumble Gaming Inc. to expand its
              offering to include a fully integrated media platform with a robust
              distribution network across the realms of traditional and digital
              media. Evan now represents 200+ premier esports organizations,
              athletes, content creators, game developers, and ancillary entities;
              assisted multi-national brands authentically implement marketing
              campaigns; been consulted by major institutional banks on their
              prospective investments; and has developed a full-service law firm
              in a niche area that is drastically under severed by traditional
              legal mechanisms.
            </p>
            <p className="ourTeam-paragraph">
              Evan has also committed to contributing to the community by
              providing pro-bono legal services to a young population of
              competitive gamers who are otherwise unable to afford legal
              assistance, and by working with charitable organizations such as
              Autism Speaks, on initiatives directed at using gaming as a platform
              to advance social good. Evan holds both a Canadian and American law
              degree from University of Windsor School of Law and the University
              of Detroit School of Law, respectively.
            </p>
          </>
        )} revealed={(
          <p className="ourTeam-paragraph">
            Mr. Kubes is the President and Co-founder of MKM Group – Canada’s
            first, and one of the world’s most influential, Law Firms and
            Management Agencies dedicated exclusively to esports and content
            creators...
          </p>
        )}/>
    </section>
  );
};

export default OurTeam;
