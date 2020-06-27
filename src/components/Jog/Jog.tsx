import React from "react";
import icon from "../../images/icon.svg";
import "./Jog.css";
import { Jog as JogType } from "../../types/jogs";

function Jog(props: JogType) {

  return (
    <div className="jog">
      <div className="jog__logo">
        <img src={icon} alt="jog icon" className="jog__logo-img"></img>
      </div>
      <div className="jog__details">
        <ul className="jog__list">
          <li className="jog__item">
            <span className="jog__date">
              {" "}
              {new Date(props.date).toLocaleDateString()}{" "}
            </span>
          </li>
          <li className="jog__item">
            <span className="jog__label"> Speed: </span>
            <span className="jog__data"> 15 </span>
          </li>
          <li className="jog__item">
            <span className="jog__label"> Distance: </span>
            <span className="jog__data"> {props.distance} km </span>
          </li>
          <li className="jog__item">
            <span className="jog__label"> Time: </span>
            <span className="jog__data"> {props.time} min </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Jog);
