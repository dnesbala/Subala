import React from "react";
import "./Title.css";

const Title = ({ title, description }) => {
  return (
    <div className="title">
      <h2 className="title__text">{title}</h2>
      <p className="title__description">{description}</p>
    </div>
  );
};

export default Title;
