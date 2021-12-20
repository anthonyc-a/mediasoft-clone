import React from "react";
import Line from "../../Animated/Line";
import { data } from "./AbilityData";

const CrossSVG = "https://mediasoft.team/assets/images/2021/cross.svg";

const Abilities = () => {
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

  console.log(heightEl);

  const abilityLoop = (item) => {
    var listItems = [];
    for (var i = 0; i < item.abilityList.length; i++) {
      listItems.push(<li key={i}>{item.abilityList[i]}</li>);
    }
    return listItems;
  };

  const servicesLoop = (item) => {
    var listItems = [];
    for (var i = 0; i < item.services.length; i++) {
      listItems.push(<li key={i}>{item.services[i]}</li>);
    }
    return listItems;
  };

  return (
    <section className="ability section">
      <div className="container">
        <div className="ability-header">
          <span>our</span> capabilities
        </div>
        <ul className="ability-list">
          {data.map((item, i) => (
            <li
              onClick={() => {
                toggle(i);
              }}
              key={i}
            >
              <Line />
              <div className="ability-wrap">
                <div className="ability-panel-left">
                  <div
                    className={
                      selected === i ? "ability-title active" : "ability-title"
                    }
                    key={i}
                  >
                    {item.num}{" "}
                    <span key={i}>
                      <strong>{item.type}</strong> inhouse {item.role}
                    </span>
                  </div>
                </div>
                <div className="ability-panel-right" key={i}>
                  <ul>{abilityLoop(item)}</ul>
                </div>
                <div
                  className={
                    selected === i ? "ability-close active" : "ability-close"
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
                <div
                  className="item-inner"
                  aria-hidden={selected === i ? false : true}
                >
                  <div className="ability-service">
                    <div className="ability-name" key={i}>
                      services
                    </div>
                    <ul>{servicesLoop(item)}</ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Line />
      </div>
    </section>
  );
};

export default Abilities;
