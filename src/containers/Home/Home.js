import React from "react";
import Nav from "../../components/Nav";
import WhatWeDo from "../../components/WhatWeDo";
import "./_home.scss";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="trust--stamp--hero--tunez">
        <h1>Secure, Private & Trusted Identity</h1>
        <p>
          Mitigate fraud, retain customers, and reach a broader base of users
          worldwide with AI-powered identity
          <br /> solutions at the intersection of biometrics, privacy, and
          cybersecurity.
        </p>
        <button className="btn">GET IN TOUCH NOW</button>
        <div className="hero--bottom"></div>
      </div>
      <WhatWeDo />
    </>
  );
};

export default Home;
