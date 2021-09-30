import React from "react";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";

import girl from "../../images/girl.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner
        headingText="One of the finest parlor in the city.. "
        buttonText="Shop"
        buttonUrl="/shop"
      />
      <Title title="About" />
      <div className="about">
        <div className="about__description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>

        <div className="about__image">
          <img src={girl} alt="Girl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
