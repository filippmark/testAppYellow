import React from "react";
import JogsFilter from "../JogsFilter/JogsFilter";
import Jog from "../Jog/Jog";
import "./Jogs.css";

export default function Jogs() {
  return (
    <React.Fragment>
      <JogsFilter></JogsFilter>
      <div className="jogs">
        <Jog></Jog>
        <Jog></Jog>
        <Jog></Jog>
      </div>
    </React.Fragment>
  );
}
