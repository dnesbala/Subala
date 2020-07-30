import React from "react";
import Banner from "../../components/Banner/Banner";

const Error404 = () => {
  return (
    <div>
      {/* <Title title="404 : ERROR" /> */}
      <Banner
        headingText="404: PAGE NOT FOUND"
        buttonText="Go Home"
        buttonUrl="/"
      />
    </div>
  );
};

export default Error404;
