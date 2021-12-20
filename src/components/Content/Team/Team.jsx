import React from "react";

const carouselImg1 =
  "https://mediasoft.team/assets/images/2021/team/team-6.jpg";

  const Logo1 = "https://mediasoft.team/assets/images/2021/team/team-logo-1.png"
  const Logo2 = "https://mediasoft.team/assets/images/2021/team/team-logo-2.png"
  const Logo3 = "https://mediasoft.team/assets/images/2021/team/team-logo-3.png"
  const Logo4 = "https://mediasoft.team/assets/images/2021/team/team-logo-4.png"
  const Logo5 = "https://mediasoft.team/assets/images/2021/team/team-logo-5.png"
  const Logo6 = "https://mediasoft.team/assets/images/2021/team/team-logo-6.png"

const Team = () => {
  return (
    <section className="team section" id="about">
      <div className="container">
        <div className="team-group">
          <div className="team-head">
            <div className="section-header">
              our <span>team</span>
            </div>
            <div className="team-caption">
              <p>
                This is our main value. So we do everything to increase the
                competencies and create the care of our team. A cozy office in
                the center of the city, parking, educational activities, crazy
                parties and a readiness to help — all of it creates the unique
                corporate culture and unforgettable atmosphere in the team.
              </p>
            </div>
          </div>
          <div className="team-slider">
            <div className="carousel-outer">
              <div className="carousel">
                <div className="carousel-item">
                  <img src={carouselImg1} alt="Team 1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="team-list">
          <li>
            <div className="team-img">
              <img
                src={Logo1}
                alt="Logo 1"
              />
            </div>
          </li>
          <li>
            <div className="team-img">
              <img
                src={Logo2}
                alt="Logo 2"
              />
            </div>
          </li>
          <li className="text-item">
            We are glad to those who share our values and want to get acquainted
            with our strong inner culture. So we are the organizers of key IT
            events in our area and we are always happy to communicate.
          </li>
          <li>
            <div className="team-img">
              <img
                src={Logo3}
                alt="Logo 3"
              />
            </div>
          </li>
          <li>
            <div className="team-img">
              <img
                src={Logo4}
                alt="Logo 4"
              />
            </div>
          </li>
          <li>
            <div className="team-img">
              <img
                src={Logo5}
                alt="Logo 5"
              />
            </div>
          </li>
          <li>
            <div className="team-img">
              <img
                src={Logo6}
                alt="Logo 6"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
