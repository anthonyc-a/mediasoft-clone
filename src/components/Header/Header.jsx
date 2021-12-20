import React from "react";
import Lang from "./LangToggle/Lang";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrap">
          <Logo />
          <Nav />
          <Lang />
        </div>
      </div>
    </div>
  );
};

export default Header;
