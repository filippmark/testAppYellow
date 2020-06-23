import React from "react";
import logo from "../../images/logo.svg";
import filter from "../../images/filter.svg";
import filterActive from "../../images/filter-active.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <img src={logo} alt="logobear" className="nav__logo"></img>
        </li>
        <li className="nav__item nav__item_spacer"></li>
        <li className="nav__item"> JOGS </li>
        <li className="nav__item"> INFO </li>
        <li className="nav__item nav__item_contactus"> CONTACT US </li>
        <li className="nav__item">
          <img src={filterActive} alt="logobear" className="nav__filter"></img>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
