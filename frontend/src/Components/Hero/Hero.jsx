import React from "react";
import "./Hero.scss";

import handIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png";
import HeroImg from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={handIcon} alt="" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
