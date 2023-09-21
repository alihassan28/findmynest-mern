import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with FindMyNest</span>
          <span className="secondaryText">
            Subscribe and find super attractive prices from us.
            <br />
            Find your nest soon
          </span>
          <button className="button" href>
            <a href="mailto:4li.h455an@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
