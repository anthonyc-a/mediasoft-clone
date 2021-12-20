import React from "react";

const iconImg = "https://mediasoft.team/assets/images/2021/award.svg";

const Rating = () => {
  return (
    <section className="rating section">
      <div className="container">
        <div
          className="section-header"
          style={{ fontSize: "35px", lineHeight: "45px" }}
        >
          we are in <span>the top</span>
          <br />
          of key russian ratings
        </div>
        <div className="rating-slider">
          <div className="rating-item">
            <div className="rating-icon">
              <img src={iconImg} alt="Rating Icon" />
            </div>
            <div className="rating-name">RUWARD</div>
            <div className="rating-text">in outsourse production rating</div>
            <div className="rating-place">1st position</div>
          </div>

          <div className="rating-item">
            <div className="rating-icon">
              <img src={iconImg} alt="Rating Icon" />
            </div>
            <div className="rating-name">TAGLINE</div>
            <div className="rating-text">
              in web developers/integrators rating
            </div>
            <div className="rating-place">6th position</div>
          </div>

          <div className="rating-item">
            <div className="rating-icon">
              <img src={iconImg} alt="Rating Icon" />
            </div>
            <div className="rating-name">TAGLINE</div>
            <div className="rating-text">in mobile developers rating</div>
            <div className="rating-place">14th position</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
