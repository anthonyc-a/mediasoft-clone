import React from "react";

const contactImg1 = "https://mediasoft.team/assets/images/2021/contact-1.jpg";
const contactImg2 = "https://mediasoft.team/assets/images/2021/contact-2.jpg";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div
            className="section-header"
            style={{ fontSize: "35px", lineHeight: "45px" }}
          >
            <div className="contact-title">
              have any <span>questions</span>?
            </div>
            <div className="contact-title">discuss them with</div>
            <div className="contact-title">our leaders</div>
          </div>
          <div className="contact-group">
            <a
              href="https://www.facebook.com/pserv85"
              target="_blank"
              className="contact-link"
            >
              <span className="contact-image">
                <img src={contactImg1} alt="MediaSoft CEO" />
              </span>
              <span className="contact-name">Sergey Poluektov</span>
              CEO
            </a>
            <a
              href="https://www.facebook.com/kva87"
              target="_blank"
              className="contact-link"
            >
              <span className="contact-image">
                <img src={contactImg2} alt="MediaSoft CEO" />
              </span>
              <span className="contact-name">Vladislav Krainov</span>
              CBDO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
