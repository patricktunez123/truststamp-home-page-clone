import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header-logo--dark.svg";
import "./_nav.scss";

const Nav = () => {
  return (
    <div className="trust--stamp--nav--tunez">
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="/">Solutions</Link>
        </li>
        <li>
          <Link to="/">Industries</Link>
        </li>
        <li>
          <Link to="/">Technology</Link>
        </li>
        <li>
          <Link to="/">Company</Link>
        </li>
        <li>
          <Link to="/">News</Link>
        </li>
        <button className="btn">Contact</button>
      </ul>
    </div>
  );
};

export default Nav;
