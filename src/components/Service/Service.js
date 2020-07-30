import React from "react";
import { FaGrinAlt } from "react-icons/fa";

import "./Service.css";

const Service = ({ title, description }) => {
  return (
    <div className="service">
      <span>
        <FaGrinAlt />
      </span>
      <h3>{title}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, quo,
        voluptatibus sapiente nulla exercitationem atque praesentium aperiam
        accusamus tenetur vero inventore corporis! Similique laboriosam nihil
        id, ipsa nisi officiis? Quia rem corporis expedita, consequuntur a vero
        officiis earum nulla doloremque. Doloremque nihil dolorem, perferendis
        sed molestias repudiandae debitis ducimus odio.
      </p>
    </div>
  );
};

export default Service;
