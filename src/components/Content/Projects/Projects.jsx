import React from "react";
import Line from "../../Animated/Line";
import { data } from "./ProjectData";

const CrossSVG = "https://mediasoft.team/assets/images/2021/cross.svg";

const Projects = () => {
  const [selected, setSelected] = React.useState(null);
  const [heightEl, setHeightEl] = React.useState();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const refHeight = React.useRef();

  React.useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const expertsLoop = (item) => {
    var listItems = [];
    for (var i = 0; i < item.experts.length; i++) {
      listItems.push(<li key={i}>{item.experts[i]}</li>);
    }
    return listItems;
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          some of our <span>projects</span>
        </div>
        <ul className="project-list">
          {data.map((item, i) => (
            <li
              onClick={() => {
                toggle(i);
              }}
            >
              <Line type="line" />
              <div className="project-wrap">
                <div className="project-name">{item.name}</div>
                <div className="project-type">{item.description}</div>
                <div className="project-device">{item.type}</div>
                <div
                  className={
                    selected === i ? "item-close active" : "item-close"
                  }
                >
                  <img src={CrossSVG} alt="Close Item" />
                </div>
              </div>
              <div
                className={
                  selected === i
                    ? "accordion-toggle animated"
                    : "accordion-toggle"
                }
                style={{ height: selected === i ? `${heightEl}` : "0px" }}
                ref={refHeight}
              >
                <div className="project-content">
                  <div className="project-lang">{item.lang}</div>
                  <p>{item.desc1}</p>
                  <p>{item.desc2}</p>
                  <ul>{expertsLoop(item)}</ul>
                  <p>{item.desc3}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Line type="line" />
      </div>
    </section>
  );
};

export default Projects;
