import React from "react";
import Line from "../../Animated/Line";

const BannerImg = "https://mediasoft.team/assets/images/2021/banner-1.jpg";
const BannerImg2 = "https://mediasoft.team/assets/images/2021/banner-2.jpg";
const AnimateImg = "https://mediasoft.team/assets/images/2021/logo.png";

const Banner = () => {
  const duplicateImg = () => {
    var imgList = [];
    for (var i = 0; i < 33; i++) {
      imgList.push(<img src={AnimateImg} key={i} loading="lazy" alt="Logo" />);
    }
    return imgList;
  };

  return (
    <section className="banner section">
      <div className="container">
        <Line type="line wt" />
        <div className="banner-group">
          <div className="banner-title">
            <span>/* software</span>
          </div>
          <div className="banner-img">
            <img src={BannerImg} alt="Banner Img" />
          </div>
        </div>

        <Line type="line wt" />
        <div className="banner-line">
          <div className="banner-animate">{duplicateImg()}</div>
        </div>
        <Line type="line wt" />

        <div className="banner-group">
          <div className="banner-img">
            <img src={BannerImg2} alt="Banner Img" />
          </div>
          <div className="banner-title">
            <span>engineering */</span>
          </div>
        </div>
        <Line type="line wt" />
      </div>
    </section>
  );
};

export default Banner;
