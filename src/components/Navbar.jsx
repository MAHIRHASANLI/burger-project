import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import NavbarImage from "../assets/navbarImage.svg.png"

const Navbar = () => {
  return (
    <div className="nav">
      <div className="main">
        <div className="navImg">
          <img
            alt="homeimage"
            src={NavbarImage}
          />
        </div>

        <div className="navLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
