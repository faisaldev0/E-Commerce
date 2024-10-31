// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.scss";
import navLogo from "../../assets/logo.png";
import navProfile from "../../assets/profile_icon.png";
import Arrow from "../../assets/downArrow.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={navLogo} className="nav-logo" alt="Nav Logo" />
        <div className="nav-text">
          <h4 className="store-name">NestStore</h4>
          <p className="admin-text">Admin Panel</p>
        </div>
      </div>
      <div className="profile-container">
        <img src={navProfile} className="nav-profile" alt="Profile" />
        <img src={Arrow} className="nav-arrow" alt="Arrow" />
      </div>
    </div>
  );
};

export default Navbar;
