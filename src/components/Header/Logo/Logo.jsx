import React from "react";
import LogoImg from "../../../img/logo.png";

const Logo = () => {
  return (
    <a className="header-logo" href="/">
      <img src={LogoImg} alt="MediaSoft Logo" />
    </a>
  );
};

export default Logo;
