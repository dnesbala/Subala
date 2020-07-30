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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            commodi reprehenderit ex ipsam culpa, error, tempora accusantium
            amet accusamus, maiores exercitationem nam odit similique! Voluptate
            perspiciatis officiis excepturi eum. Nisi quos modi enim, possimus
            veniam et placeat perferendis quas asperiores voluptatibus obcaecati
            qui eveniet commodi cum maxime. Magnam sed cum dolores placeat
            ratione obcaecati rerum quae deserunt ullam fugit. Voluptatem
            molestiae debitis blanditiis, omnis animi eum accusamus in
            laudantium. Voluptas labore asperiores consequatur! Assumenda qui
            nulla voluptas perspiciatis in illo voluptatibus reiciendis fuga,
            doloribus quas nostrum doloremque nisi aperiam? Minus maxime ipsa
            neque sit sapiente dignissimos molestiae soluta harum velit.
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
