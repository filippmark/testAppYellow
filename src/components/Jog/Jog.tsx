import React from "react";
import icon from "../../images/icon.svg";
import "./Jog.css";

export default function Jog() {
  return (
    <div className="jog">
      <div className="jog__logo">
        <img src={icon} alt="jog icon" className="jog__logo-img"></img>
      </div>
      <div className="jog__details">
        <ul className="jog__list">
          <li className="jog__item">
            <span className="jog__date"> 20.12.2017 </span>
          </li>
          <li className="jog__item">
            <span className="jog__label"> Speed: </span>
            <span className="jog__data"> 15 </span>
          </li>
          <li className="jog__item">
            <span className="jog__label"> Distance: </span>
            <span className="jog__data"> 10 km </span>
          </li>
          <li className="jog__item">
            <span className="jog__label"> Time: </span>
            <span className="jog__data"> 60 min </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
