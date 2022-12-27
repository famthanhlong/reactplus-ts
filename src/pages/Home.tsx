import React from "react";

//
import banner from "../asset/Banner.png";
import Button from "../common/ButtonStart";
//
import "./Home.css";

function Home() {
  return (
    <div className="main-home">
      <div className="banner-home">
        <img src={banner} alt="Banner" />
      </div>
      <div className="title-home">
        <h2>Welcome to</h2>
        <h1>Our reminder</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
        </p>
      </div>
      <Button />
    </div>
  );
}

export default Home;