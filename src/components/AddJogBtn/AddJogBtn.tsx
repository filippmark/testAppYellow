import React from "react";
import addNewIcon from "../../images/add.svg";
import "./AddJogBtn.css";

function AddJogBtn() {
  return (
    <div className="add-jog">
      <img className="add-jog__image" src={addNewIcon} alt="add new jog"></img>
    </div>
  );
}

export default AddJogBtn;
