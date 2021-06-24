import React from "react";
import technology from "../../images/technology-new-1.png";
import "./_whatWeDo.scss";

const WhatWeDo = () => {
  return (
    <div className="trust--stamp--what-we-do--tunez">
      <div className="top">
        <div className="left">
          <h6>WHAT WE DO</h6>
          <h1>Establishing Trust in a Digitally Connected World</h1>
          <p>
            Trust Stamp delivers trusted identity systems at the heart of how
            organisations and individuals transact in the connected world and
            beyond. We focus on three key areas in identity:
          </p>
        </div>

        <div className="right">
          <img src={technology} alt="" />
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default WhatWeDo;
