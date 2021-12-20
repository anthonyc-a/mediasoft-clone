import React from "react";
import Line from "../../Animated/Line";
import { data } from "./ApproachData";

const Approach = () => {
  return (
    <section className="approach section">
      <div className="container">
        <div className="section-header">
          <span>our</span> approach to development
        </div>
        <Line type="line" />
        <ul className="approach-list">
          {data.map((item, i) => (
            <>
              <li>
                <div className="approach-wrapper">
                  <div className="approach-num">{item.num}</div>
                  <div className="approach-group">
                    <div className="approach-title">{item.title}</div>
                    <div className="approach-text">{item.text}</div>
                  </div>
                </div>
              </li>
              <Line type="line" />
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Approach;
