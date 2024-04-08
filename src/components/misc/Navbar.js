import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://i.pinimg.com/736x/d8/e3/04/d8e3040372030c633df7f7ee5034dfef.jpg"
        alt="img del creador"
      />{" "}
      <Link to="/">
        <h1>Toneti Blog</h1>
      </Link>
      <Link to="/articulos">Artículos</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Registrate</Link>
    </div>
  );
}

export default Navbar;
