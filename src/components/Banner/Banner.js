import React from "react";
import { NavLink } from "react-router-dom";

import "./Banner.css";

const Banner = ({ headingText, buttonText, buttonUrl }) => {
  return (
    <div className="banner">
      <div className="banner__info">
        <h3>{headingText}</h3>
        <NavLink to={buttonUrl} className="banner__button">
          {buttonText}
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
