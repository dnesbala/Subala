import React from "react";
import Title from "../../components/Title/Title";
import Service from "../../components/Service/Service";

import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <Title title="Services" description="Our Awesome Services..." />
      <div className="services__cards">
        <Service title="Make Up" />
        <Service title="Hair Cutting" />
        <Service title="Cosmetics" />
        <Service title="Others" />
      </div>
      <div className="services__cards">
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
