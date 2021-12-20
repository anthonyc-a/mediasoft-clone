import React from "react";

const DownArrow = "https://mediasoft.team/assets/images/2021/arrow-down.svg";
const HeroImg = "https://mediasoft.team/assets/images/2021/service-image.jpg";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-header">
            <div className="hero-title">250</div>
            <div className="hero-title">developers</div>
          </div>
          <div className="hero-group">
            <div className="hero-text">
              it staff <span>augmentation</span>
            </div>
            <div className="hero-icon">
              <img src={DownArrow} alt="Down Arrow" />
            </div>
          </div>
          <div className="hero-img">
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
