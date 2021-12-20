import React from "react";

const social1 = "https://mediasoft.team/assets/images/2021/facebook.svg";
const social2 = "https://mediasoft.team/assets/images/2021/inst.svg";
const social3 = "https://mediasoft.team/assets/images/2021/vk.svg";
const social4 = "https://mediasoft.team/assets/images/2021/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-group">
          <div className="footer-logo">
            <img
              src="https://mediasoft.team/assets/images/2021/logo.png"
              alt=""
            />
          </div>
          <div className="footer-panel">
            <div className="footer-address">
              <h2>Address</h2>
              <div className="footer-link">
                <a href="https://goo.gl/maps/snG7nrTnZdFRK7Gg8">
                  8 The Green, Suite 12817, Dover, DE 19901
                </a>
              </div>
            </div>
            <div className="footer-contacts">
              <h2>Contact</h2>
              <div className="footer-phone">
                <a href="tel:+13236471033">+1 (323) 647-10-33</a>
              </div>
              <div className="footer-link">
                <a href="mailto:info@mediasoft.team">info@mediasoft.team</a>
              </div>
              <div className="footer-social">
                <a href="https://www.facebook.com/msoft.team/">
                  <img src={social1} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/mediasoft.team/">
                  <img src={social2} alt="instagram" />
                </a>
                <a href="https://vk.com/mediasoft.team">
                  <img src={social3} alt="vk" />
                </a>
                <a href="https://www.linkedin.com/company/10541419/">
                  <img src={social4} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <a href="/">© mediasoft.team | 2021</a>
          <span>
            Site made by design partners{" "}
            <a href="https://www.uprock.ru/">UPROCK</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
