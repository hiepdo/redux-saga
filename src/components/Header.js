import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(0, 0, 255)" }}
      >
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          Home
        </NavLink>

        <NavLink to="/add" className="btn" style={{ color: "white" }}>
          Add
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
