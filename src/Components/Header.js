import React from "react";
import user from "../Assets/user .png";

const Header = () => {
  return (
    <header>
      <h1 className="heading">NorthStar</h1>
      <div className="header-user">
        <img src={user} alt="user" />
      </div>
    </header>
  );
};

export default Header;
