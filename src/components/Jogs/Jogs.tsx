import React from "react";
import JogsFilter from "../JogsFilter/JogsFilter";
import Jog from "../Jog/Jog";
import AddJogBtn from "../AddJogBtn/AddJogBtn";
import "./Jogs.css";

export default function Jogs() {
  return (
    <div className="jogs-wrapper">
      <JogsFilter></JogsFilter>
      <div className="jogs">
        <Jog></Jog>
        <Jog></Jog>
        <Jog></Jog>
      </div>
      <AddJogBtn></AddJogBtn>
    </div>
  );
}
