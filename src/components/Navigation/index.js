import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./Navbar.css";

const Navbar = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    margin: ".8em 1.8em",
  };

  const inputStyle = {
    fontStyle: "italic",
    width: "30vw",
    padding: ".5em 1.8em",
  };

  return (
    <nav className="navbar" role="navigation" style={style}>
      <div id="logo">
        <Link to={ROUTES.LANDING}>mentale</Link>
      </div>
      {/* <input
        type="search"
        placeholder="Je veux un mentor en..."
        style={inputStyle}
      /> */}
      <div
        id="nav-items"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul>
          <li>
            <Link to={ROUTES.MENTORS}>Explorer</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN}>Connexion</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>Se Joindre gratuitement</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
